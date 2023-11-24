# Project build without docker
## PostgreSQL Database Setup
Follow these steps to set up your PostgreSQL database for Video Gallery:
1. **Log in to your PostgreSQL server:**
    ```bash
    sudo su postgres
    psql
    ```
2. **Create a new user named `mytestuser` with the password 'mypass':**
    ```sql
    CREATE USER mytestuser WITH PASSWORD 'mypass';

    ```
3. **Create a new database named `video_gallery`:**
    ```sql
    CREATE DATABASE video_gallery;
    ```
 
### Client installation
```bash
cd client/
npm install
npm start
```
### Server installation
```bash
cd server/
npm run dev
```
the last command will run migrations and seeders if the tables do not exist, and then the server itself

**Grant  privileges:**
```sql
GRANT ALL PRIVILEGES ON TABLE users TO mytestuser;
GRANT USAGE, SELECT ON SEQUENCE users_id_seq TO mytestuser;
GRANT ALL PRIVILEGES ON TABLE videos TO mytestuser;
GRANT USAGE, SELECT ON SEQUENCE videos_id_seq TO mytestuser;
GRANT ALL PRIVILEGES ON TABLE users_videos TO mytestuser;
``` 
```bash
npm install
npm start
```
