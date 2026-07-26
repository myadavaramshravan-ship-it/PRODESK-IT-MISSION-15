# TaskFlow – Full Stack Task Management Application

TaskFlow is a full-stack task management application built using the MERN stack. It provides secure authentication, complete CRUD operations for tasks, and Stripe-powered Pro account upgrades.

## Features

- JWT Authentication
- User Registration & Login
- Protected Routes
- Task CRUD Operations
- Ownership Validation
- Search & Filter Tasks
- Dashboard Analytics
- Task Status Chart
- Stripe Checkout Integration
- Pro Account Upgrade
- Responsive UI

---

## Tech Stack

### Frontend

- React.js
- React Router
- Axios
- Chart.js
- React Toastify

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Stripe API

---

## Folder Structure

```
client/
server/
```

---

## Installation

### Backend

```bash
cd server
npm install
npm run dev
```

### Frontend

```bash
cd client
npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file inside the server folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=your_stripe_secret
CLIENT_URL=http://localhost:5173
```

---

## API Endpoints

### Authentication

- POST /api/auth/register
- POST /api/auth/login

### Tasks

- POST /api/tasks
- GET /api/tasks
- GET /api/tasks/:id
- PUT /api/tasks/:id
- DELETE /api/tasks/:id

### Payments

- POST /api/payment/create-checkout-session
- POST /api/payment/upgrade

---

## Security

- JWT Protected Routes
- User Ownership Validation
- Password Hashing
- MongoDB Validation

---

## Future Improvements

- Dark Mode
- Drag and Drop Tasks
- Team Collaboration
- Email Notifications
- Due Dates
- Calendar View

---

## Author

Developed as a Full Stack Developer Internship Project.