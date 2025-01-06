# Personal Finance Tracker Application

## Overview

The Personal Finance Tracker is a full-stack application that allows users to manage their income, expenses, and transactions efficiently. Built with Node.js, Express.js, PostgreSQL, and Redis, it provides features like user authentication, transaction management, and caching for performance optimization.

---

## Features

- **User Authentication**: Register and log in securely with JWT (JSON Web Tokens).
- **Transaction Management**: Add, update, delete, and retrieve income and expense transactions.
- **PostgreSQL Database**: Securely store all user and transaction data.
- **Redis Caching**: Optimize performance by caching frequently accessed data (e.g., transaction lists).
- **Scalable API**: RESTful API design ensures easy integration and expansion.

---

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL (with Sequelize ORM)
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcrypt.js
- **Caching**: Redis
- **API Documentation**: Postman (for API testing)

---

## Installation

### Prerequisites

- **Node.js**: Download and install from [Node.js Official Website](https://nodejs.org/).
- **PostgreSQL**: Download and install from [PostgreSQL Official Website](https://www.postgresql.org/).
- **Redis**: Optional, but recommended. Install from [Redis Official Website](https://redis.io/).

### Step-by-Step Setup

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/yourusername/personal-finance-tracker.git
    cd personal-finance-tracker
    ```

2. **Install Dependencies**:

    ```bash
    npm install
    ```

3. **Configure PostgreSQL**:

    - Ensure PostgreSQL is installed and running.
    - Create a new database for the project (e.g., `finance_tracker`).

4. **Set Up Environment Variables** (Optional but recommended):

    - Create a `.env` file in the project root with the following content:

      ```env
      JWT_SECRET=your_jwt_secret_key
      POSTGRES_USER=yourUsername
      POSTGRES_PASSWORD=yourPassword
      POSTGRES_DB=finance_tracker
      ```

5. **Run the Application**:

    ```bash
    node server.js
    ```

    - The server will start on port 3000 by default.

6. **Access the API**:

    - The API is available at `http://localhost:3000`.
    - Supported endpoints:

        - **POST** `/api/auth/register`: Register a new user (requires `username`, `email`, `password`).
        - **POST** `/api/auth/login`: Log in with an existing user (requires `email`, `password`).
        - **GET** `/api/transactions`: Fetch all transactions (requires authentication).
        - **POST** `/api/transactions`: Create a new transaction (requires `type`, `amount`, `description`).
        - **PUT** `/api/transactions/:id`: Update an existing transaction (requires `type`, `amount`, `description`).
        - **DELETE** `/api/transactions/:id`: Delete a transaction (requires authentication).

---

## API Documentation

- Use [Postman](https://www.postman.com/) or any API testing tool to test and interact with the API.

---

## Deployment

### Deploying to Heroku

1. Create a `Procfile` in the project root with the following content:

    ```makefile
    web: node server.js
    ```

2. Follow Heroku’s [Node.js deployment guide](https://devcenter.heroku.com/articles/deploying-nodejs) to deploy the application.

---

Happy Tracking!
