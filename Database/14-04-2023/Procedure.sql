/*Exercise 1:
Create a procedure that accepts a customer ID and returns the customer's name, email, phone, and the total amount spent on orders.*/
create or replace procedure get_info1(cust_id SMALLINT,prod_id SMALLINT)
language plpgsql
as $$
DECLARE
    pname varchar(25); 
    pemail varchar(25);
    pphone varchar(13);
   
    squantity smallint;
    pprice smallint;
    total_amount smallint;
begin
        SELECT INTO pname name FROM customer WHERE id=cust_id; 
	SELECT INTO pemail email FROM customer WHERE id=cust_id;
	SELECT INTO pphone phone FROM customer WHERE id=cust_id;
	RAISE NOTICE 'Customer Name: %', pname;
	RAISE NOTICE 'Customer Email: %', pemail;
	RAISE NOTICE 'Customer Phone: %', pphone;
	
	select into squantity sum(quantity) from "order" where customer_id=cust_id and product_id=prod_id ;
	select into pprice price from product where id=prod_id;
	select into total_amount pprice*squantity;
	RAISE NOTICE 'Total Amount Spent of this product: %', total_amount;

end; $$;

