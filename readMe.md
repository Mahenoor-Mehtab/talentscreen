# Interview Platform 🎯

A full-stack technical interview platform featuring live video calls, real-time chat, secure code execution, and automated coding feedback.

---

## 🚀 Features

- 🔐 **Authentication with Clerk**
- 🎥 **1-on-1 Video Interview Calls** (Stream Video)
- 🧭 **Dashboard with Live Statistics**
- 🔊 **Mic & Camera Toggle**
- 🖥 **Screen Sharing & Recording**
- 💬 **Real-time Chat Messaging** (Stream)
- ⚙️ **Secure Code Execution** in Isolated Environment
- 🎯 **Automated Feedback** (Pass / Fail via Test Cases)
- 🎉 **Confetti on Success & Notifications on Failure**
- 🧩 **Practice Problems Page** (Solo Coding Mode)
- 🔒 **Room Locking** (Only 2 Participants Allowed)
- 🧠 **Background Jobs** with Inngest (Async Tasks)
- 🧰 **REST API** with Node.js & Express
- ⚡ **Data Fetching & Caching** using TanStack Query


---

## 🛠 Tech Stack

### Frontend
- React
- TanStack Query
- VSCode Web Editor

### Backend
- Node.js
- Express.js
- REST APIs

### Authentication
- Clerk

### Video & Chat
- Stream Video
- Stream Chat

### Background Jobs
- Inngest

### DevOps & Tools
- Git & GitHub
- CodeRabbit
- Sevalla (Deployment)

---

## ⚙️ Environment Variables
PORT=5000
DATABASE_URL=your_database_url
CLERK_SECRET_KEY=your_clerk_key
STREAM_API_KEY=your_stream_key
STREAM_SECRET=your_stream_secret

## ▶️ Setup & Run
git clone https://github.com/your-username/interview-platform.git
cd interview-platform

npm install
npm run dev
npm start
