## PostgreSQL Database Setup
Follow these steps to set up your PostgreSQL database for the Smart Farm project:
1. **Log in to your PostgreSQL server:**
    ```bash
    sudo su postgres
    psql
    ```
2. **Create a new user named `mytestuser` with the password 'mypass':**
    ```sql
    CREATE USER mytestuser WITH PASSWORD 'mypass';

    ```
3. **Create a new database named `exam`:**
    ```sql
    CREATE DATABASE exam;
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
```
Execute the following command to run the migrations
```bash
npx sequelize db:migrate
```
Use the following command to execute all the available seeders:
```bash
npx sequelize db:seed:all

```
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
