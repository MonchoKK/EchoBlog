# EchoBlog API

## Overview
The EchoBlog API is a backend-only platform that allows users to manage blog posts with functionalities such as authentication, creating, reading, updating, and deleting posts. This API is built with Node.js, Express, MongoDB, and Swagger for API documentation.

## Features

- JWT-based user authentication and authorization.
- CRUD operations for blog posts.
- Swagger UI for interactive API documentation.
- Error handling and validation for all endpoints.

---

## Project Architecture

### Technology Stack

- **Node.js**: JavaScript runtime for building the server.
- **Express**: Web framework for routing and middleware.
- **MongoDB**: NoSQL database for data storage.
- **Mongoose**: ORM for MongoDB.
- **Swagger**: API documentation.

### Folder Structure

```
project-folder/
|-- routes/
|   |-- auth.js       # Authentication routes
|   |-- posts.js      # Blog post routes
|-- models/
|   |-- User.js       # User model
|   |-- Post.js       # Blog post model
|-- middleware/
|   |-- auth.js       # JWT authentication middleware
|-- config/
|   |-- db.js         # Database connection setup
|-- .env              # Environment variables
|-- server.js         # Main server file
```

---

## Setup Instructions

### Prerequisites

1. Install [Node.js](https://nodejs.org/) (v14 or higher).
2. Install [MongoDB](https://www.mongodb.com/atlas/database) or create a cluster on MongoDB Atlas.
3. Use a terminal or code editor like VS Code.

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/echoblog.git
   cd echoblog
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add the following:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Start the Server**:

   ```bash
   node server.js
   ```

   The server will run at `http://localhost:5000`.

5. **Access Swagger UI**:
   Visit `http://localhost:5000/api-docs` for API documentation.

---

## Usage Guidelines

### Available Endpoints

#### Authentication

- `POST /api/auth/signup`: Register a new user.
- `POST /api/auth/login`: Authenticate a user and get a JWT.

#### Posts

- `GET /api/posts`: Get all posts.
- `POST /api/posts`: Create a new post (requires authentication).
- `PUT /api/posts/:id`: Update a post (requires authentication).
- `DELETE /api/posts/:id`: Delete a post (requires authentication).

### Testing the API

1. Use **Swagger UI** for testing endpoints interactively.
2. Alternatively, test using **Postman** or **curl**.

#### Example Request (Postman)

**POST** `http://localhost:5000/api/auth/signup`

Headers:

```
Content-Type: application/json
```

Body (raw JSON):

```json
{
  "username": "testuser",
  "email": "testuser@example.com",
  "password": "password123"
}
```

---

## Troubleshooting

- **Error connecting to MongoDB**: Ensure your `MONGO_URI` is correct and your IP is whitelisted in MongoDB Atlas.
- **Cannot POST /api/auth/signup**: Verify your route definitions and server setup.
- **Swagger not working**: Ensure `swagger-jsdoc` and `swagger-ui-express` are properly configured.

---

## Future Improvements

- Add file upload support for blog posts.
- Implement user roles (admin, editor, viewer).
- Add pagination for posts.
- Deploy the API to a cloud platform like Heroku or Render.

---

## Author

**Kabelo Moncho**  
[LinkedIn](https://linkedin.com/in/Kabelo-Moncho) | [GitHub](https://github.com/MonchoKK)

