# Touken Challenge 

This is a boilerplate project to kickstart applications using **Express.js**, **TypeORM**, and **TypeScript**. 
The app includes features such as environment variable management, API documentation, authentication, and database management.

---

## 🚀 Getting Started

### Clone the Repository

```bash
git clone --depth 1 https://github.com/osgioia/challenge-touken.git
cd challenge-touken
npx rimraf ./.git
```

### Install Dependencies

```bash
yarn install
```

### Set Environment Variables

```bash
cp .env.example .env

# Open the .env file and modify the variables as needed
```

---

## 🏃‍♂️ Running the Application

### Development Mode

```bash
yarn dev
```

### Production Mode

```bash
yarn start
```

---

## 📦 Database Management

### Push Changes to the Database Schema

```bash
yarn db:push
```

### Open Prisma Studio for Database Visualization

```bash
yarn db:studio
```

---

## 🐳 Docker Support

### Run in Development Mode with Docker

```bash
yarn docker:dev
```

### Run in Production Mode with Docker

```bash
yarn docker:prod
```

### PostgreSQL Database Container

Start:

```bash
yarn docker:dev-db:start
```

Stop:

```bash
yarn docker:dev-db:stop
```

---

## 🛠️ Linting and Formatting

### Run ESLint

```bash
yarn lint
```

### Fix ESLint Issues

```bash
yarn lint:fix
```

### Run Prettier

```bash
yarn prettier
```

### Fix Prettier Issues

```bash
yarn prettier:fix
```

---

## ⚙️ Environment Variables

Environment variables are stored in the `.env` file. The default configuration includes:

```bash
# Application
PORT=3000

# Database
DATABASE_URL=postgresql://postgres:secret@localhost:5432/mydb?schema=public

# JWT Authentication
JWT_SECRET=thisisasamplesecret
JWT_ACCESS_EXPIRATION_MINUTES=30
JWT_REFRESH_EXPIRATION_DAYS=30

# SMTP Configuration
SMTP_HOST=email-server
SMTP_PORT=587
SMTP_USERNAME=email-server-username
SMTP_PASSWORD=email-server-password
EMAIL_FROM=support@yourapp.com
```

---

## 📖 API Documentation

To view the API documentation, start the server and navigate to:

```
http://localhost:3000/v1/docs
```

This documentation is automatically generated using Swagger.

---

## 📋 API Endpoints

### Auth Routes

- `POST /v1/auth/register` - Register a new user
- `POST /v1/auth/login` - Log in
- `POST /v1/auth/refresh-tokens` - Refresh authentication tokens
- `POST /v1/auth/forgot-password` - Send a password reset email
- `POST /v1/auth/reset-password` - Reset the password
- `POST /v1/auth/send-verification-email` - Send a verification email
- `POST /v1/auth/verify-email` - Verify an email address

### User Routes

- `POST /v1/users` - Create a new user
- `GET /v1/users` - Retrieve all users
- `GET /v1/users/:userId` - Retrieve a user by ID
- `PATCH /v1/users/:userId` - Update a user by ID
- `DELETE /v1/users/:userId` - Delete a user by ID

### Campaign Routes

- `POST /v1/campaigns` - Create a campaign
- `GET /v1/campaigns` - Retrieve all campaigns
- `GET /v1/campaigns/:Id` - Retrieve a campaign by ID
- `PUT /v1/campaigns/:Id` - Update a campaign by ID
- `DELETE /v1/campaigns/:Id` - Delete a campaign by ID

---
