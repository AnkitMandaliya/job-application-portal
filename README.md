# Job Application Portal – REST API

A RESTful Job Application Portal built using **Node.js, Express.js, MongoDB**, and **JWT authentication**.  
This API allows candidates to register, log in, upload resumes, apply for jobs, and track their applications.

---

## 🚀 Live Deployment
**Base URL (Render):**  
https://job-application-portal-1-7o4g.onrender.com

---

## 🛠 Technology Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT (JSON Web Tokens)
- **File Upload:** Multer
- **Deployment:** Render

---

## 📂 Project Features
- User registration & login with JWT authentication
- Secure password hashing using bcrypt
- Resume upload using Multer (PDF/DOC/DOCX)
- Apply for job listings
- Track submitted job applications
- Prevent duplicate job applications
- Cloud deployment with environment variables

---

## 📁 Project Setup (Local)

### 1️⃣ Clone Repository
```bash
git clone https://github.com/AnkitMandaliya/job-application-portal
cd job-application-portal
```
2️⃣ Install Dependencies
```bash
npm install
```
3️⃣ Environment Variables


Create a .env file in the project root using the sample below.

.env.example


PORT=5000


MONGO_URI=your_mongodb_connection_string


JWT_SECRET=your_jwt_secret_key


⚠️ Important:
The actual .env file is excluded from GitHub for security reasons.
Never commit real credentials to a public repository.


▶️ Run Application
```bash
npm run dev
```
Server runs on:
http://localhost:5000


📬 API Endpoints


🔐 Authentication


(1) Register User


POST /api/auth/register


Request Body:


{
  "name": "Ankit",

  
  "email": "ankit@test.com",

  
  "password": "Password@123"
}


(2) Login User


POST /api/auth/login


Response:


{
  "token": "JWT_TOKEN"
}


💼 Jobs


(3) Seed Sample Jobs


POST /api/jobs/seed


(4) Get All Jobs


GET /api/jobs



📄 Job Applications


(5) Apply for Job


POST /api/applications/apply


Headers:
Authorization: Bearer <JWT_TOKEN>


Body (form-data):


jobId  : <JOB_ID>
resume : <PDF/DOC/DOCX file>


(6) View My Applications


GET /api/applications/my


Headers:
Authorization: Bearer <JWT_TOKEN>


Sample Response:


[
  {
    "job": {
      "title": "Node.js Developer",
      "location": "Remote"
    },
    "status": "Applied",
    "appliedAt": "2025-12-18T10:30:00.000Z"
  }
]


📬 Postman Collection


A Postman collection is included to test all API endpoints.


postman/Job-Application-Portal.postman_collection.json


How to Use


Import the collection into Postman


Set BASE_URL to the live or local URL


Login and store JWT token


Test protected APIs using Authorization header


✅ Assignment Fulfillment


✔ RESTful API developed using Node.js & Express


✔ MongoDB Atlas integration with Mongoose


✔ JWT-based authentication implemented


✔ Resume upload using Multer


✔ Job application and tracking functionality


✔ Postman collection provided for API testing


✔ Secure environment configuration


✔ Application deployed on Render


✔ Live API endpoint shared for evaluation


👤 Author


Ankit Mandaliya





