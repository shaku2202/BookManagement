# Backend Book Management System

## Introduction

The Backend Book Management System is a Node.js application designed to handle the backend functionality of a book management system. It provides APIs for managing books, users, and authentication.

## Project Type

Backend

## Deployed App

Backend: [Link to deployed backend](https://bookmanagement-ono2.onrender.com/)  

## Features

- CRUD operations for managing books.
- User authentication and authorization.
- API endpoints for handling book requests.
- Database schema for book storage.

## Design Decisions or Assumptions

- Designed for scalability and performance.
- Assumes users are authenticated before accessing book-related endpoints.

## Installation & Getting Started

1. Clone the repository: `https://github.com/shaku2202/BookManagement`
2. Install dependencies: 
   ```bash
   cd backend-book-management/backend
   npm install

Set up environment variables for database connection and JWT secret.
Start the server: npm start
Usage
Ensure that the backend server is running and accessible at the specified port (e.g., http://localhost:4500).

## Credentials
Please Go through Code Base

## APIs Used
Express.js for API routing and middleware.
MongoDB for database storage.
JWT for user authentication and authorization.

## API Endpoints

- GET /book - Retrieve all books
- POST /book/add - Create a new book
- PATCH /book/update/:id - Update an existing book
- DELETE /book/delete/:id - Delete a book by ID
- POST /book/buy/:id - Buy a book
- POST /book/borrow/:id - Borrow a book

## Technology Stack
Node.js
Graphql
Express.js
MongoDB
JWT for authentication
Other libraries/modules as needed
