# Node Username Registration Project

This is a simple Node.js web application that allows users to register by submitting their username,  and password. The data is stored securely in a MySQL database.

##  Features

- User registration form (`register.html`)
- Backend built with Express.js
- MySQL database integration
- Secure handling of `.env` file (excluded via `.gitignore`)
- API tested via Postman
  
##  Prerequisites: Install Node.js & MySQL

Before running this project, make sure you have the following installed:

### ✅ Node.js

Node.js is required to run the backend server.

- 🔗 [Download Node.js](https://nodejs.org/)
- After installation, verify with:

```bash
node -v
npm -v 
```








##  MySQL
MySQL is required to store user data.
- 🔗 [Download MySQL](https://dev.mysql.com/downloads/workbench/)
- Go to download and download full package
- During setup, note your username, password, and port (default is 3306)


 Create Database & Table
Once MySQL is running, create a database and table:
```
CREATE DATABASE userdb;

USE userdb;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  
  username VARCHAR(100),
  password VARCHAR(100)
);
```



 ##  Technologies Used

- Node.js
- Express.js
- MySQL
- HTML & CSS
- Postman (for API testing)

##  Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/Ammar-farid/node-username-project.git
   cd node-username-project

   ```
2. Open the project in VS Code :
 ```bash
  code .
```
3. Install required packages Open VS Code terminal and run:
 ```bash
npm install express
npm install mysql
```
4. Open MySQL Command Line Client
- Search in Start Menu: MySQL Command Line Client
- Open it
- Enter your current root password when prompted

 Paste the Command
 ```SQl
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_password';
FLUSH PRIVILEGES;
```

Replace 'your_password' with your actual password (same one you'll use in .env file for Node.js)

5. Start the server
 ```bash
node server.js
```









 

