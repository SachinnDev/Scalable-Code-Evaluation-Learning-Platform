
# Scalable Code Evaluation & Learning Platform

A full-stack coding assessment and learning platform that allows users to solve programming problems using an online code editor, execute code in real time, receive AI-assisted guidance, and learn through video-based solutions.

## 🎥 Demo Video
[Watch Demo](https://drive.google.com/file/d/1KTuEcsEpT8o5mAEDld3mJGGFShnReFWv/view?usp=drive_link)

---

##  Features

* **Online Code Editor** – Write and edit code using the Monaco Editor.
* **Real-Time Code Execution** – Run submitted code and view execution results.
* **Coding Assessments** – Solve programming problems through an interactive assessment interface.
* **AI-Assisted Learning** – Get hints and feedback related to logic, errors, and code complexity.
* **Video Solutions** – Access video-based explanations for programming problems.
* **JWT Authentication** – Secure user authentication and protected routes.
* **Role-Based Access Control** – Separate user and admin functionality.
* **Admin Management** – Manage coding problems and learning content.
* **Redis Caching** – Cache frequently accessed data to reduce unnecessary database operations.
* **Cloudinary Integration** – Store and manage video content.

---

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript
* HTML
* CSS
* Monaco Editor

### Backend

* Node.js
* Express.js
* REST APIs

### Database & Caching

* MongoDB
* Redis

### Authentication & Services

* JWT
* Gemini API
* Cloudinary

### Tools

* Git
* GitHub
* Postman

---

## 📅 Development Progress

The project was developed incrementally, with each day focusing on building and improving a different part of the platform.

### Day 01 – Project Setup & Backend Foundation

* Set up the initial project structure.
* Initialized the Node.js backend.
* Configured Express.js.
* Established the basic server architecture.
* Connected the backend with MongoDB.
* Created the initial API structure.

### Day 02 – Database & API Development

* Designed the initial database structure.
* Created MongoDB models and schemas.
* Implemented backend API routes.
* Organized controllers and backend logic.
* Tested APIs using Postman.

### Day 03 – Authentication

* Implemented user registration and login.
* Added password handling and authentication flow.
* Integrated JWT-based authentication.
* Added protected backend routes.
* Implemented authentication middleware.

### Day 04 – Frontend Development

* Set up the React frontend.
* Created the initial UI structure.
* Connected frontend components with backend APIs.
* Implemented basic navigation and application flow.
* Started building the coding assessment interface.

### Day 05 – Online Code Editor

* Integrated the Monaco Editor.
* Built the coding problem interface.
* Added code input and submission functionality.
* Connected the editor with the backend execution workflow.
* Displayed execution results to the user.

### Day 06 – Coding Assessment Features

* Improved the coding assessment workflow.
* Added problem-related data and test-case handling.
* Connected problem information with the frontend.
* Improved API communication between frontend and backend.
* Refined the user experience for solving coding problems.

### Day 07 – AI Assistance

* Integrated Gemini API for AI-powered assistance.
* Added hints and learning-oriented feedback.
* Designed the AI workflow to provide guidance instead of directly revealing solutions.
* Added assistance for understanding logic, errors, and code complexity.

### Day 08 – Redis & Video Learning

* Integrated Redis for caching frequently accessed data.
* Improved backend data retrieval using caching.
* Integrated Cloudinary for video management.
* Added video-based learning/solution functionality.
* Connected video content with the learning workflow.

### Day 09 – Optimization & Final Integration

* Integrated the major frontend and backend modules.
* Tested the complete application workflow.
* Debugged API and frontend issues.
* Improved authentication and access control.
* Refined the overall application structure.
* Performed final testing and prepared the project for demonstration.

---

## 🏗️ Architecture

```text
                  ┌─────────────────────┐
                  │      React.js       │
                  │     Frontend UI     │
                  └──────────┬──────────┘
                             │
                             │ REST APIs
                             ▼
                  ┌─────────────────────┐
                  │ Node.js + Express.js│
                  │       Backend       │
                  └──────┬──────┬───────┘
                         │      │
                ┌────────┘      └─────────┐
                ▼                         ▼
        ┌──────────────┐          ┌──────────────┐
        │   MongoDB    │          │    Redis     │
        │   Database   │          │    Cache     │
        └──────────────┘          └──────────────┘
                │
                ▼
        ┌──────────────┐
        │  Cloudinary  │
        │    Videos    │
        └──────────────┘

             + Gemini API
             + Code Execution
```

---

## 📂 Project Structure

```text
Scalable-Code-Evaluation-Learning-Platform/
│
├── Day01/
├── Day02/
├── Day03/
├── Day04/
├── Day05/
├── Day06/
├── Day07/
├── Day08/
├── Day09/
│
├── frontend/
│   └── ...
│
├── .gitignore
└── README.md
```

The `Day01`–`Day09` folders contain the incremental development work completed during the project.

The `frontend` folder contains the React-based client application.

---

## 🔄 Application Workflow

```text
User
  │
  ▼
Login / Register
  │
  ▼
Select Coding Problem
  │
  ▼
Monaco Code Editor
  │
  ▼
Submit Code
  │
  ▼
Backend API
  │
  ├── Code Execution
  ├── Test Cases
  └── Result Processing
  │
  ▼
Execution Result
  │
  ├── AI Hint / Feedback
  │
  └── Video Solution
```

---

##  AI Assistance

The platform integrates the Gemini API to provide learning-oriented assistance.

The AI can help users understand:

* Logic errors
* Possible improvements
* Code complexity
* Hints for approaching a problem

The objective is to help users understand and improve their approach rather than simply providing the complete solution.

---

## 🔐 Authentication & Authorization

JWT-based authentication is used to manage user sessions and protect backend routes.

Role-based authorization separates administrative functionality from regular user functionality.

---

## ⚡ Performance & Scalability

Redis is used as a caching layer for frequently requested data, reducing repeated database operations.

The backend uses Node.js and Express.js APIs to separate application logic into manageable modules and support concurrent requests.

---

##  Getting Started

### Prerequisites

* Node.js
* npm
* MongoDB
* Redis
* Git

### Clone the Repository

```bash
git clone https://github.com/SachinnDev/Scalable-Code-Evaluation-Learning-Platform.git

cd Scalable-Code-Evaluation-Learning-Platform
```

### Install Dependencies

For the backend:

```bash
npm install
```

For the frontend:

```bash
cd frontend
npm install
```

### Environment Variables

Create a `.env` file and configure the required credentials:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
REDIS_URL=your_redis_url
GEMINI_API_KEY=your_gemini_api_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

> Never commit your `.env` file or API keys to GitHub.

### Run the Application

Start the backend:

```bash
npm start
```

Start the frontend:

```bash
cd frontend
npm run dev
```

---

## 🔮 Future Improvements

* Support for additional programming languages.
* Improved code execution isolation.
* Submission history and performance analytics.
* Difficulty-based problem filtering.
* Leaderboards and progress tracking.
* Personalized AI learning recommendations.
* Automated test-case management.
* Improved monitoring and error handling.

---

## 👨‍💻 Author

**Sachin Kumar Ojha**

* GitHub: [SachinnDev](https://github.com/SachinnDev)
* LinkedIn: [Sachin Kumar Ojha](https://www.linkedin.com/)

---

## 📄 License

This project is developed for educational and portfolio purposes.

