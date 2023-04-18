CREATE TABLE employee_audit(id smallint,salary integer,date timestamp default now());
CREATE TABLE EMPLOYEE(id serial primary key,name varchar(20),salary integer );
CREATE OR REPLACE FUNCTION upd_salary_func()
  RETURNS trigger AS
$$
BEGIN
 insert into employee_audit(id,salary) values (new.id,new.salary) ;
RETURN NEW;
END;
$$
LANGUAGE 'plpgsql';
CREATE TRIGGER upd_ord_trig
  AFTER UPDATE
  ON EMPLOYEE
  FOR EACH ROW
  EXECUTE PROCEDURE upd_salary_func();
