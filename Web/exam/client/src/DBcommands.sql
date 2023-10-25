CREATE USER mytestuser WITH PASSWORD 'mypass';
CREATE DATABASE exam;

\c exam

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255),
    password VARCHAR(255)         
);

GRANT ALL PRIVILEGES ON TABLE users TO mytestuser;
GRANT USAGE, SELECT ON SEQUENCE users_id_seq TO mytestuser;

CREATE TABLE videos (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    category VARCHAR(255),
    url VARCHAR(255) 
);

GRANT ALL PRIVILEGES ON TABLE videos TO mytestuser;
GRANT USAGE, SELECT ON SEQUENCE videos_id_seq TO mytestuser;

CREATE TABOE users_videos(
    u_id INT,
    v_id INT
);
GRANT ALL PRIVILEGES ON TABLE users_videos TO mytestuser;
alter table users_videos add constraint fk_uid foreign key (u_id) references users(id);
alter table users_videos add constraint fk_vid foreign key (v_id) references videos(id);