# Joyjatra Travel Backend 🛠️

This is the core API service for the Joyjatra Travel platform, built with **Node.js**, **Express**, and **TypeScript**. It manages the business logic, real-time communications, and secure data persistence for events, blogs, and bookings.

---

## 🚀 Features

- **Type-Safe ORM**: Database management using **Prisma** with a **PostgreSQL** database.
- **Authentication**: Secure, modern auth powered by **Better-Auth**.
- **Real-time Engine**: Bi-directional communication for support messages via **Socket.io**.
- **Role-Based Access Control (RBAC)**: Middleware-level protection for Admin, Moderator, and User routes.
- **Validation**: Strict input validation to ensure data integrity.

---

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **ORM**: Prisma
- **Database**: PostgreSQL
- **Auth**: Better-Auth
- **Real-time**: Socket.io
- **Package Manager**: pnpm

---

### 📁 Project Structure
```text
src/
├── modules/
│   ├── auth/           # Better-Auth config, login/signup logic
│   ├── events/         # Event creation, updates, and Moderator tools
│   ├── blogs/          # Content management system (CMS) logic
│   ├── bookings/       # Transactional logic for user event bookings
│   ├── support/        # Socket.io handlers & real-time chat state
│   └── users/          # User profiles, RBAC, and Admin oversight
├── middleware/         # Domain-agnostic guards (Logger, JSON parser)
├── config/             # Environment variables & Global constants
├── app.ts              # Express app initialization & Module registration
└── server.ts           # HTTP & Socket.io server entry point
```

## 🚀 Getting Started

### Prerequisites
- **Node.js**
- **npm**: `npm install -g npm.`
- *PostgreSQL instance (local or hosted)**

### 📦 Installation & Setup

1. **Clone & Navigate**
   ```bash
   git clone https://github.com/abdulbariks/joyjatra-travel-server
   cd joyjatra-travel-server
   ```
2.**Install Dependencies**
```bash
pnpm install
```
3. **Database Setup**
   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```
4. **Environment Variables**
   ```bash
    PORT=5000
    DATABASE_URL="postgresql://user:password@localhost:5432/joyjatra"
    BETTER_AUTH_SECRET="your_secret_here"
    FRONTEND_URL="http://localhost:3000"
   ```
   5. **Start the server**
      ```bash
      # Development mode
      npm dev
      # Build & Start
      npm build
      npm start
      ```
