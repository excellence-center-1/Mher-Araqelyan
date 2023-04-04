// 2 
CREATE TABLE users2(id serial primary key,name varchar(15),password TEXT NOT NULL,age smallint,birthday SMALLINT, created_on timestamp default NOW(), updated_on timestamp default NOW());
CREATE OR REPLACE FUNCTION birthday_insert_trigger_fnc2()
  RETURNS trigger AS
$$
BEGIN
 update users2 set birthday=(DATE_PART('year',NOW())-NEW.age )  where id=NEW.id;
RETURN NEW;
END;
$$
LANGUAGE 'plpgsql';
CREATE TRIGGER birthday_insert_trigger2
  AFTER INSERT
  ON users2
  FOR EACH ROW
  EXECUTE PROCEDURE birthday_insert_trigger_fnc2();

insert into users2(name,password,age) values ('Mher','mherpass',21);
select * from users2;
