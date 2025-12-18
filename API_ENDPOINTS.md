📬 API Endpoints
Job Application Portal – REST API
🌐 Base URLs

Live (Render)
https://job-application-portal-1-7o4g.onrender.com

Local
http://localhost:5000

🔐 Authentication

POST /api/auth/register
Register a new user

POST /api/auth/login
Login user and get JWT token

💼 Jobs

POST /api/jobs/seed
Seed sample job listings

GET /api/jobs
Fetch all available jobs

📄 Job Applications

(JWT authentication required)

POST /api/applications/apply
Apply for a job with resume upload

GET /api/applications/my
View logged-in user’s job applications

📬 Postman Collection

postman/Job-Application-Portal.postman_collection.json

👤 Author

Ankit Mandaliya