CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER set_timestamp
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();


CREATE EXTENSION pgcrypto;
CREATE TABLE users(id serial primary key,name varchar(15),password TEXT NOT NULL,birthday SMALLINT, created_on timestamp default NOW(), updated_on timestamp default NOW());
INSERT INTO users (name, password,birthday) VALUES ('john',  crypt('johnspassword', gen_salt('bf')), 2001);
CREATE TABLE users1(id serial primary key,name varchar(15),password TEXT NOT NULL,age SMALLINT);
CREATE OR REPLACE FUNCTION birthday_insert_trigger_fnc()
  RETURNS trigger AS
$$
BEGIN
 INSERT INTO users (name,password,birthday )
VALUES(NEW."name",crypt('NEW."password"',gen_salt('bf')),(DATE_PART('year',NOW())-NEW.age ) );
RETURN NEW;
END;
$$
LANGUAGE 'plpgsql';
CREATE TRIGGER birthday_insert_trigger
  AFTER INSERT
  ON users1
  FOR EACH ROW
  EXECUTE PROCEDURE birthday_insert_trigger_fnc();
INSERT INTO users1(name,password,age) values ('Maxim','passMaxim',35);
select * from users;
//2
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
