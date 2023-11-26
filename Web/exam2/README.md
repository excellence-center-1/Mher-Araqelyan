# Video Gallery Application

Welcome to the Video Gallery application – a platform that allows users to register, log in, and manage their video collection seamlessly.

## Features

- **User Authentication:**
  - New users can register an account.
  - Existing users can log in securely.

- **Video Management:**
  - Add new videos to your collection.
    - Ensure uniqueness based on video name and URL.
  - View a list of all your videos by category (including public videos that everyone can see).
  - Edit details of existing videos.
    - Ensure uniqueness based on video name and URL.
  - Delete videos from your collection( If you delete a public video, it will not be shown only for this user).



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
npm install
npm run dev
```
the last command will run migrations and seeders if the tables do not exist, and then the server itself on 5000 port

# Project build with docker
To build and run the project using Docker, execute the following command:
```bash
docker-compose up -d 
```
This command will start the application in detached mode, creating and running containers for the client, server, and PostgreSQL database. It includes automatic setup of the database, migrations, seeders, and starting the server on port 5000.


# Briefly About Project Features

The project utilizes five distinct tables to efficiently manage user accounts, videos, categories, and user preferences.

## Database Tables

1. **users:**
    - Stores user credentials with email and securely hashed passwords.

2. **videos:**
    - Contains details about videos, including title, URL, and whether they are public or private.
    - Includes a foreign key linking to the `categories` table.

3. **users_videos:**
    - Serves as a junction table, establishing a many-to-many relationship between users and videos.

4. **categories:**
    - Stores the names of video categories.

5. **deleted_public_videos:**
    - Manages user preferences regarding public videos they choose not to display on their page.
    - Includes the user ID and public video ID to customize the user experience.

## Authentication with JWT Tokens

- **JWT Token Generation:**
    - The server generates JWT tokens upon successful login or registration by the user.

- **Token Storage:**
    - The JWT tokens are sent to the client and stored in the `localStorage` for secure session management.

- **Token Attachments:**
    - Each client request includes the JWT token, ensuring secure communication between the client and server.

- **Server-Side Verification:**
    - The server uses the `authMiddleware` to validate and authenticate requests by checking the attached JWT token.