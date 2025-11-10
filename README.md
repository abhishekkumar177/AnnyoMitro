# 🥗 FoodSaver — Smart Food Management & Donation Platform

> 🌍 **An Open Source Full-Stack Project under Social Winter of Code 2025**  
> Empowering communities to reduce food waste and connect donors with NGOs through modern web technologies.

---

## 🚀 Overview

**FoodSaver** is a full-stack web platform designed to minimize food waste by connecting **restaurants**, **NGOs**, and **donors**.  
It allows organizations to register, donate surplus food, track expiry dates, and collaborate seamlessly — all while learning real-world **web development**, **database management**, and **API integration** skills.

Built using a hybrid stack of **HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB**, and **Spring Boot**, this project blends modern JavaScript technologies with enterprise-level backend reliability.

---

## 🎯 Mission

> To create a sustainable and tech-driven solution for food wastage, while fostering open-source learning and collaboration.

### Core Objectives:
- Reduce global food waste through digital coordination.
- Encourage restaurants and NGOs to work collaboratively.
- Provide hands-on development exposure for contributors.
- Promote social good through technology.

---

## 🧩 Features

### 🌐 Frontend (React + HTML, CSS, JS)
- **Modern React 18 Architecture**
- **Responsive Design** with CSS Grid & Flexbox
- **Dynamic Routing** using React Router
- **Reusable Components** for modular scalability
- **Accessibility Ready** with ARIA roles and semantic HTML
- **Form Validation & Alerts** using JavaScript hooks

### ⚙️ Backend (Node.js + Express + Spring Boot)
- **RESTful APIs** for data handling and authentication
- **Spring Boot Microservices** for modular scalability
- **MongoDB Atlas** integration for data persistence
- **Secure API Design** with JWT authentication
- **Cross-Origin Configuration (CORS)** enabled for React frontend

### 🧠 Additional Features
- Real-time donation status tracking
- Typewriter animations and smooth UI transitions
- Multi-user registration (Restaurant / NGO / Admin)
- Contact form with backend mail integration
- Sustainable design system with light/dark mode toggle

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|--------|-------------|----------|
| **Frontend** | HTML5, CSS3, JavaScript (ES6+), React 18 | Responsive and interactive UI |
| **Routing** | React Router DOM | SPA navigation |
| **Styling** | CSS Grid, Flexbox, CSS Variables | Consistent and clean layout |
| **Backend (JS)** | Node.js + Express.js | REST API and middleware handling |
| **Backend (Java)** | Spring Boot | Microservice integration for future scalability |
| **Database** | MongoDB Atlas | NoSQL database for user and donation data |
| **Auth & Security** | JWT, Bcrypt.js | Authentication and authorization |
| **Deployment** | Vercel (Frontend), Render/Heroku (Backend) | Cloud hosting |
| **Version Control** | Git + GitHub | Collaboration and issue tracking |

---

## 🧱 Project Structure

FoodSaver/
├── client/ # React Frontend (HTML, CSS, JS)
│ ├── public/
│ ├── src/
│ │ ├── components/ # Navbar, Footer, Cards, etc.
│ │ ├── pages/ # Home, About, NGO, Restaurant
│ │ ├── hooks/ # Custom React hooks
│ │ ├── App.js
│ │ ├── App.css
│ │ └── index.js
│ └── package.json
│
├── server/ # Node + Express Backend
│ ├── models/ # Mongoose schemas
│ ├── routes/ # API endpoints
│ ├── controllers/ # Business logic
│ ├── app.js
│ ├── server.js
│ └── package.json
│
├── springboot-api/ # Java Microservice Backend
│ ├── src/main/java/com/foodsaver/
│ │ ├── controller/ # REST controllers
│ │ ├── service/ # Service layer
│ │ ├── repository/ # Spring Data JPA integration
│ │ └── model/ # Entity classes
│ ├── src/main/resources/
│ │ ├── application.properties
│ └── pom.xml
│
└── README.md



---

## 🎨 Design System

### Color Palette
| Role | Color | Hex |
|------|--------|-----|
| Primary | Green | `#38e07b` |
| Secondary | Dark Green | `#0b0f0c` |
| Accent | Mint | `#51946c` |
| Background | Light | `#f8fbfa` |
| Card Background | `#e8f2ec` |
| Border | `#daeded` |

### Typography
- **Primary Font:** Work Sans  
- **Secondary Font:** Noto Sans  
- **Weights:** 400, 500, 700, 900  

---

## ⚡ Installation Guide

### 🧩 Prerequisites
Ensure you have installed:
- Node.js ≥ v18  
- npm ≥ v9  
- MongoDB Atlas account  
- Java JDK ≥ 17 (for Spring Boot backend)

---

### 🧰 Steps

```bash
# 1️⃣ Clone the repository
git clone https://github.com/abhishekkumar177/FoodSaver.git
cd FoodSaver

# 2️⃣ Install frontend dependencies
cd client
npm install

# 3️⃣ Start frontend
npm start

# 4️⃣ Install backend dependencies
cd ../server
npm install

# 5️⃣ Run backend server
node server.js

# 6️⃣ (Optional) Run Spring Boot microservice
cd ../springboot-api
mvn spring-boot:run


Future Enhancements

🔒 Role-based authentication (Admin, NGO, Restaurant)

🌐 Global map-based food pickup coordination

🧾 AI-powered expiry prediction model (using TensorFlow.js)

📦 Integration with Google Maps API

🌙 Dark mode and accessibility improvements

🤝 Contribution Guide

We welcome contributions from beginners to advanced developers!
Follow these steps to get started:

Fork this repo

Clone your fork

Create a new branch (feature/your-feature-name)

Commit & Push your changes

Open a Pull Request with a clear description

Please refer to CONTRIBUTING.md
 for detailed guidelines.

🧩 Issue Levels for SWoC/WOCS
Label	Description	Example
level 1	HTML/CSS/JS beginner tasks	Adjust navbar, fix responsive layout
level 2	React or Express-level work	Add new page, connect form to API
level 3	Full-stack integration	Build Spring Boot microservice or JWT auth
📢 Communication

🗨️ Join our Discord Server
 for contributor discussions

🧑‍🏫 Mentorship available during Social Winter of Code 2025

🪶 Stay updated with #SWoC2025 #FoodSaver #OpenSource

🪶 License

Licensed under the MIT License — free to use and modify with attribution.

✨ Acknowledgements

Social Winter of Code (WOCS) 2025 for providing a collaborative platform.

All contributors and mentors supporting this initiative.

Open-source community for fostering shared learning.

🌟 “Save Food, Share Hope, Build a Better Tomorrow.”

— Team FoodSaver | Full Stack Edition (MERN + Spring Boot)


---

## 💬 Summary
This README:
- ✅ Clearly positions *FoodSaver* as a **hybrid full-stack open-source project**  
- ✅ Mentions **both Java (Spring Boot)** and **JavaScript (MERN)**  
- ✅ Uses **standard open-source documentation format** (for SWoC/WOCS)
- ✅ Is ready for **GitHub repository use & project submission**

