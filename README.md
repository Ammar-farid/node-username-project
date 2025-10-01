# Node Username Registration Project

This is a simple Node.js web application that allows users to register by submitting their username,  and password. The data is stored securely in a MySQL database.

## 🚀 Features

- User registration form (`register.html`)
- Backend built with Express.js
- MySQL database integration
- Secure handling of `.env` file (excluded via `.gitignore`)
- API tested via Postman
  
## 🛠️ Prerequisites: Install Node.js & MySQL

Before running this project, make sure you have the following installed:

### ✅ Node.js

Node.js is required to run the backend server.

- 🔗 [Download Node.js](https://nodejs.org/)
- After installation, verify with:

```bash
node -v
npm -v 
```








## ✅ MySQL
MySQL is required to store user data.
- 🔗 [Download MySQL]
- During setup, note your username, password, and port (default is 3306)


✅ Create Database & Table
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



 ## 📦 Technologies Used

- Node.js
- Express.js
- MySQL
- HTML & CSS
- Postman (for API testing)

## 🛠️ Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/Ammar-farid/node-username-project.git
   cd node-username-project

   ```
