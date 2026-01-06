# Customer Feedback Service

## 📌 Overview

This project is a **production-ready backend service** built as part of a Backend Engineer technical assignment. The goal is to demonstrate **real-world backend engineering practices**, including secure API design, scalable architecture, clear separation of concerns, and cloud deployment.

The service allows customers to submit feedback, users/admins to view feedback, and admins to view basic analytics.

---

## 🏗 Architecture Overview

```
Client (Postman / Frontend)
        |
        v
     NGINX (Reverse Proxy)
        |
        v
   Express.js API (Node.js)
        |
        v
     MongoDB (Mongoose ODM)
```

### Key Decisions

* **NGINX**: Reverse proxy, request routing, SSL termination
* **Express.js**: Lightweight, flexible REST API framework
* **MongoDB**: Schema-flexible, scalable NoSQL database
* **JWT Authentication**: Stateless and horizontally scalable
* **PM2**: Process management and auto-restart in production

---

## 🧰 Technology Stack

* **Backend**: Node.js, Express.js
* **Database**: MongoDB, Mongoose
* **Authentication**: JWT, bcrypt
* **Security**: Helmet, Rate Limiting, Input Validation
* **Deployment**: AWS EC2, NGINX, PM2
* **Testing**: Postman

---

## 🔐 Authentication & Authorization

### Authentication

* JWT-based authentication
* Tokens are issued on successful login
* Tokens contain user ID and role

### Authorization

* Role-based access control (RBAC)
* Supported roles:

  * `ADMIN`
  * `USER`

| Role  | Permissions                                 |
| ----- | ------------------------------------------- |
| USER  | Submit feedback, view feedback              |
| ADMIN | Create users, view feedback, view analytics |

---

## 📡 API Flow

1. Admin logs in and receives JWT
2. Admin creates users (optional role assignment)
3. Users log in to receive JWT
4. Authenticated users submit feedback
5. Users/Admins fetch feedback with pagination & filters
6. Admin accesses analytics endpoints

---

## 📂 API Endpoints Summary

| Method | Endpoint             | Access     | Description     |
| ------ | -------------------- | ---------- | --------------- |
| POST   | `/api/auth/login`    | Public     | Login user      |
| POST   | `/api/auth/register` | Admin      | Create user     |
| POST   | `/api/feedback`      | User       | Submit feedback |
| GET    | `/api/feedback`      | User/Admin | Fetch feedback  |
| GET    | `/api/analytics`     | Admin      | View analytics  |

---

## 🗄 Database Design

### User Collection

```json
{
  "email": "string",
  "password": "hashed string",
  "role": "ADMIN | USER",
  "createdAt": "date"
}
```

**Indexes**

* `email` (unique)

### Feedback Collection

```json
{
  "rating": "number (1–5)",
  "comment": "string",
  "source": "string",
  "userId": "ObjectId",
  "createdAt": "date"
}
```

**Indexes**

* `rating`
* `source`
* `createdAt`

---

## 🔒 Security Decisions

* Password hashing using **bcrypt** (salt rounds = 10)
* JWT authentication with expiry
* Role-based authorization middleware
* Input validation using **express-validator**
* Rate limiting to prevent abuse
* Helmet for secure HTTP headers
* Environment variables for secrets (never committed)

---

## 🚀 AWS Deployment Steps

1. Launch **EC2 (Ubuntu)** instance
2. Configure **Security Groups** (Ports: 22, 80, 443)
3. Install Node.js, MongoDB, NGINX
4. Clone repository
5. Create `.env` file
6. Install dependencies
7. Start server using **PM2**
8. Configure **NGINX reverse proxy**

```bash
pm2 start src/server.js --name feedback-api
pm2 save
```

---

## ⚖️ Scaling Strategy (1M+ Records)

* Proper indexing on frequently queried fields
* Pagination for all list APIs
* Read replicas for MongoDB
* Horizontal scaling with Load Balancer (ALB)
* Caching analytics using Redis
* Background jobs for heavy analytics computation

---

## 🧪 Testing Strategy

* Manual testing using **Postman**
* Covered test cases:

  1. User login
  2. Admin user creation
  3. Submit feedback
  4. Fetch feedback with pagination
  5. Unauthorized access handling
  6. Admin analytics access

---

## 📦 Environment Variables

```env
PORT=4000
MONGO_URI=<your_mongo_uri>
JWT_SECRET=<your_secret>
JWT_EXPIRES_IN=1d
```

---

### API Documentation
```Swagger UI is available at:
http://<BASE_URL>/api-docs/
```
---

## 📌 Notes

* This project focuses on **clarity, scalability, and security** rather than feature overload
* Designed to reflect **real-world backend ownership**
* Can be extended with Swagger, Redis, background jobs, and CI/CD

---

## 👨‍💻 Author

Built with a production mindset to demonstrate backend engineering depth and ownership.
