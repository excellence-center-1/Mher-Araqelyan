CREATE DATABASE store;
\c store
CREATE TABLE store ( Store_id serial PRIMARY KEY, StoreName VARCHAR ( 50 ) UNIQUE NOT NULL, StoreBudget INT);
CREATE TABLE store_product (StoreId SMALLINT NOT NULL,ProductId SMALLINT NOT NULL,sellingprice int);
CREATE TABLE product (Id serial PRIMARY KEY, Name VARCHAR ( 50 ) UNIQUE NOT NULL, Description VARCHAR(150) NOT NULL);
CREATE TABLE customer (id SERIAL PRIMARY KEY,Name VARCHAR ( 50) NOT NULL,LastName VARCHAR ( 50) NOT NULL,Cash INT NOT NULL);
CREATE TABLE customerpurchases (CustomerId SMALLINT NOT NULL,StoreId SMALLINT NOT NULL,ProductId SMALLINT NOT NULL );
CREATE TABLE factory(id SERIAL PRIMARY KEY,name VARCHAR(50) NOT NULL);
CREATE TABLE vendor(id SERIAL PRIMARY KEY,name VARCHAR(50),phone VARCHAR(12),email VARCHAR(25));
CREATE TABLE factory_product(factory_id SMALLINT,product_id SMALLINT,price int);
CREATE TABLE vendor_factory(vendor_id SMALLINT,factory_id SMALLINT,product_id SMALLINT,supplyprice INT);

INSERT INTO store(storename,storebudget) values('VipXanut', 500000);
INSERT INTO store(storename,storebudget) values('Erebuni', 750000);
INSERT INTO store(storename,storebudget) values('Nairi', 1500000);
INSERT INTO product(ProductName,Description) values('Xndzor','Qaxcr xndzor');
INSERT INTO product(ProductName,Description) values('Dzmeruk','yntir dzmeruk');
INSERT INTO product(ProductName,Description) values('Malina','Antari Malina');
INSERT INTO store_product(StoreId,productid,sellingprice) values(1,1,150);
INSERT INTO store_product(StoreId,productid,sellingprice) values(1,2,165);
INSERT INTO store_product(StoreId,productid,sellingprice) values(1,3,145);
INSERT INTO store_product(StoreId,productid,sellingprice) values(2,2,140);
INSERT INTO store_product(StoreId,productid,sellingprice) values(2,3,125);
INSERT INTO store_product(StoreId,productid,sellingprice) values(3,1,115);
INSERT INTO store_product(StoreId,productid,sellingprice) values(3,2,145);
INSERT INTO customer(customername,customerlastname,customercash) values('Mher', 'Araqelyan',250000);
INSERT INTO customer(customername,customerlastname,customercash) values('Aram', 'Armenakyan',150000);
INSERT INTO customer(customername,customerlastname,customercash) values('Tigran', 'Sahakyan',30000);
INSERT INTO customerpurchases(customerid,storeid,productid) values(1, 1, 1);
INSERT INTO customerpurchases(customerid,storeid,productid) values(1, 1, 3);
INSERT INTO customerpurchases(customerid,storeid,productid) values(2, 1, 1);
INSERT INTO customerpurchases(customerid,storeid,productid) values(3, 3, 2);
INSERT INTO factory(name) values('Berqarat');
INSERT INTO factory(name) values('Fruits');
INSERT INTO factory(name) values('Martuni');
INSERT INTO vendor(name,phone,email) values('Arman','095485868','aaa@mail.ru');
INSERT INTO vendor(name,phone,email) values('Varazdat','091845868','bbb@mail.ru');
INSERT INTO vendor(name,phone,email) values('Liparit','045654123','ccc@mail.ru');
INSERT INTO factory_product(factory_id,product_id,price) values (1,1,55);
INSERT INTO factory_product(factory_id,product_id,price) values (1,2,45);
INSERT INTO factory_product(factory_id,product_id,price) values (2,3,75);
INSERT INTO vendor_factory (vendor_id,factory_id,product_id,supplyprice) values (1,1,1,85);
INSERT INTO vendor_factory (vendor_id,factory_id,product_id,supplyprice) values (1,1,2,95);
INSERT INTO vendor_factory (vendor_id,factory_id,product_id,supplyprice) values (1,2,3,105);



