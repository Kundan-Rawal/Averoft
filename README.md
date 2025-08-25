# 📅 Event Management System

A full-stack web application to manage events, users, and bookings.  
Admins can create/manage events, while users can view and book them.

---

## 🚀 Features

- 🔐 **Authentication & Role-based Access** (Admin/User)
- 📌 **Admin**
  - Create and manage events
- 👥 **User**
  - View available events
  - Book events
- 📊 **Bookings Page**: View all event bookings with user & event details
- 🌗 **Dark/Light Mode Support (via Tailwind)**
- 🎯 Built with **React + Express + PostgreSQL**

---

## 🛠️ Tech Stack

- **Frontend**: React, TailwindCSS, React Router
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL (Neon.tech for cloud DB)
- **Authentication**: JWT-based

---

## 📂 Folder Structure

Averoft/
│
├── Backend/ # Express API + PostgreSQL
│ ├── controllers/ # Request handlers
│ ├── middleware/ # Auth middleware
│ ├── routes/ # API routes
│ ├── db.js # Database connection
│ ├── server.js # Entry point
│ └── package.json
│
├── Frontend/ # React client
│ ├── src/
│ │ ├── components/ # Navbar, Forms, Pages
│ │ ├── pages/ # Home, Events, Bookings, CreateEvent
│ │ └── App.js
│ └── package.json
│
└── README.md

---

## ⚡ Getting Started

### 1️⃣ Clone Repo

git clone https://github.com/Kundan-Rawal/Averoft.git
cd averoft

---

### 2️⃣ Backend Setup

cd Backend
npm install

- Create a `.env` file:

PORT=5000
DATABASE_URL=postgresql://neondb_owner:npg_a4CVQKnTO5eU@ep-calm-mode-a14x14sj-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require

- Run backend:

npm start

---

### 3️⃣ Frontend Setup

cd ../Frontend
npm install
npm start

---

## 🗄️ Database Schema

CREATE TABLE users (
id SERIAL PRIMARY KEY,
name VARCHAR(100) NOT NULL,
email VARCHAR(100) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL,
role VARCHAR(10) DEFAULT 'user'
);

CREATE TABLE events (
id SERIAL PRIMARY KEY,
title VARCHAR(255) NOT NULL,
description TEXT,
location VARCHAR(255) NOT NULL,
event_date TIMESTAMP NOT NULL,
capacity INT NOT NULL,
created_by INT REFERENCES users(id) ON DELETE SET NULL
);

CREATE TABLE bookings (
id SERIAL PRIMARY KEY,
user_id INT REFERENCES users(id) ON DELETE CASCADE,
event_id INT REFERENCES events(id) ON DELETE CASCADE,
booked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

---

## 🔑 Dummy Data

-- Admin user
INSERT INTO users (name, email, password, role) VALUES
('Admin User', 'admin@example.com', 'hashedpassword', 'admin');

-- Regular users
INSERT INTO users (name, email, password) VALUES
('John Doe', 'john@example.com', 'hashedpassword'),
('Jane Smith', 'jane@example.com', 'hashedpassword');

-- Events
INSERT INTO events (title, description, location, event_date, capacity, created_by) VALUES
('Tech Conference', 'Annual Tech Conference', 'Bangalore', '2025-09-15 10:00:00', 200, 1),
('Music Fest', 'Enjoy live music with top artists', 'Mumbai', '2025-09-20 18:00:00', 500, 1);

-- Bookings
INSERT INTO bookings (user_id, event_id) VALUES
(2, 1),
(3, 2);

---

## 📸 Screenshots

- **Home Page**: Role-based options for admin/user
- **Events Page**: Browse events
- **Bookings Page**: View bookings
- **Create Event (Admin only)**

---

## 🤝 Contributing

1. Fork the repo
2. Create a new branch (`feature/new-feature`)
3. Commit changes
4. Push to branch
5. Open a Pull Request

---
