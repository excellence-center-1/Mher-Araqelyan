/*Ex-1 */
CREATE TABLE orders1(order_id SERIAL PRIMARY KEY,customer_id SMALLINT,order_total SMALLINT);
CREATE TABLE customer1(customer_id SERIAL PRIMARY KEY,name varchar(15),total_order SMALLINT default 0);
CREATE OR REPLACE FUNCTION upd_ord_func()
  RETURNS trigger AS
$$
BEGIN
 update customer1 set total_order = total_order+new.order_total   where customer_id=NEW.customer_id;
RETURN NEW;
END;
$$
LANGUAGE 'plpgsql';
CREATE TRIGGER upd_ord_trig
  AFTER INSERT
  ON orders1
  FOR EACH ROW
  EXECUTE PROCEDURE upd_ord_func();

/*Ex-2 */
CREATE TABLE products(product_id SERIAL PRIMARY KEY,name varchar(20),stock_quantity int);
CREATE OR REPLACE FUNCTION check_quant_func()
  RETURNS trigger AS
$$
BEGIN
	if NEW.stock_quantity < 0 THEN   update products set stock_quantity=OLD.stock_quantity   where product_id=NEW.product_id; end if;
RETURN NEW;
END;
$$
LANGUAGE 'plpgsql';
CREATE TRIGGER upd_ord_trig
  AFTER UPDATE
  ON products
  FOR EACH ROW
  EXECUTE PROCEDURE check_quant_func();


