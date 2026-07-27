# 🚀 TaskFlow Pro - Full Stack Task Management Application

A modern full-stack task management application built with **React.js, Node.js, Express.js, MongoDB, JWT Authentication, and Stripe Checkout Integration**.

Users can create and manage tasks, view dashboard analytics, and upgrade their account to **TaskFlow Pro** using secure Stripe payment processing.

---

# 📌 Project Overview

TaskFlow Pro is a productivity management platform that allows users to organize their daily tasks efficiently.

The application includes:

- Secure user authentication
- Protected dashboard
- Complete CRUD operations
- Task analytics visualization
- Stripe Checkout payment integration
- Pro account upgrade system
- Responsive modern UI

---

# ✨ Features

## 🔐 Authentication System

- User registration
- User login
- JWT authentication
- Password encryption using bcrypt
- Protected routes
- Token-based authorization
- User-specific data access

---

# 📝 Task Management (CRUD)

Users can:

✅ Create new tasks  
✅ View tasks  
✅ Update existing tasks  
✅ Delete tasks  
✅ Manage personal task data  

Each task belongs to the authenticated user.

---

# 📊 Dashboard Analytics

Dashboard provides:

- Total tasks count
- Completed tasks
- Pending tasks
- Task distribution charts
- Visual data representation using Chart.js

---

# 💳 Stripe Checkout Integration

Integrated Stripe Checkout for premium upgrade functionality.

## Payment Flow

```
User clicks Upgrade to Pro
          |
          ↓
Frontend requests checkout session
          |
          ↓
Backend creates Stripe Checkout Session
          |
          ↓
User completes payment
          |
          ↓
Stripe redirects to Success page
          |
          ↓
User account upgraded to Pro
```

---

## Stripe Features Implemented

- Stripe Checkout Session API
- Secure payment handling
- Test payment support
- Success redirect
- Cancel redirect
- User plan upgrade

---

# 🛠️ Tech Stack

## Frontend

| Technology | Purpose |
|---|---|
| React.js | User Interface |
| Vite | Development environment |
| React Router | Routing |
| Axios | API communication |
| Chart.js | Data visualization |
| CSS | Styling |

---

## Backend

| Technology | Purpose |
|---|---|
| Node.js | Runtime |
| Express.js | API Framework |
| MongoDB | Database |
| Mongoose | Database modeling |
| JWT | Authentication |
| bcryptjs | Password security |
| Stripe API | Payments |

---

## Deployment

| Service | Usage |
|---|---|
| Vercel | Frontend Hosting |
| Render | Backend Hosting |
| MongoDB Atlas | Database Hosting |

---

# 📂 Project Structure

```
TaskFlow-Pro
│
├── client
│   │
│   ├── src
│   │   │
│   │   ├── components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── TaskCard.jsx
│   │   │   ├── TaskForm.jsx
│   │   │   ├── TaskList.jsx
│   │   │   ├── StatsCards.jsx
│   │   │   └── TaskChart.jsx
│   │   │
│   │   ├── pages
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Success.jsx
│   │   │   └── Cancel.jsx
│   │   │
│   │   ├── services
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
│
└── server
    │
    ├── controllers
    │   ├── authController.js
    │   ├── taskController.js
    │   └── paymentController.js
    │
    ├── models
    │   ├── User.js
    │   └── Task.js
    │
    ├── routes
    │   ├── authRoutes.js
    │   ├── taskRoutes.js
    │   └── paymentRoutes.js
    │
    ├── middleware
    │   └── authMiddleware.js
    │
    ├── server.js
    └── package.json
```

---

# ⚙️ Installation & Setup

## 1. Clone Repository

```bash
git clone <repository-url>

cd TaskFlow-Pro
```

---

# Backend Setup

Navigate to server:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

STRIPE_SECRET_KEY=your_stripe_secret_key

CLIENT_URL=http://localhost:5173
```

Start backend:

```bash
npm run dev
```

Backend runs:

```
http://localhost:5000
```

---

# Frontend Setup

Navigate to client:

```bash
cd client
```

Install packages:

```bash
npm install
```

Start frontend:

```bash
npm run dev
```

Frontend runs:

```
http://localhost:5173
```

---

# 🔑 Environment Variables

## Backend

| Variable | Description |
|-|-|
| PORT | Server port |
| MONGO_URI | MongoDB database connection |
| JWT_SECRET | JWT authentication secret |
| STRIPE_SECRET_KEY | Stripe API secret key |
| CLIENT_URL | Frontend URL |

---


# 💰 Stripe Testing

Use Stripe test card:

```
Card Number:
4242 4242 4242 4242

Expiry:
Any future date

CVC:
Any 3 digits

ZIP:
Any valid ZIP
```


# 🧪 Testing Workflow

Follow these steps:

1. Open application
2. Register a new account
3. Login
4. Create tasks
5. View dashboard analytics
6. Click "Upgrade to Pro"
7. Complete Stripe checkout
8. Redirect to success page
9. Verify user plan changed to Pro

---

# 🌍 Deployment

## Frontend

Hosted on:

```
Vercel
```

Environment:

```
VITE_API_URL=your_backend_url
```

---

## Backend

Hosted on:

```
Render
```

Environment:

```
PORT
MONGO_URI
JWT_SECRET
STRIPE_SECRET_KEY
CLIENT_URL
```

---

# 🛡️ Security Features

- Password hashing
- JWT authentication
- Protected API routes
- User ownership validation
- Secure Stripe server-side integration
- Environment variable protection

---

# 🚧 Future Enhancements

- Stripe Webhooks
- Subscription based billing
- Email notifications
- User profile management
- Dark mode
- Advanced reports
- Team collaboration
- Task reminders

---

# 📸 Application Screens

(Add screenshots here)

```
Dashboard
Login
Register
Stripe Checkout
Success Page
```

---

Technology focus:

```
React.js
Node.js
Express.js
MongoDB
Stripe
JWT Authentication
```

---
