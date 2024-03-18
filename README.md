## Book Management System API

### Introduction

Welcome to the Book Management System API, a powerful solution for efficiently managing books, borrowing, and purchasing. This API provides administrators with comprehensive tools for book management while enabling users to seamlessly borrow, buy, and explore books.

### Features

- **Admin Privileges:** Administrators have full control over managing books within the system.
- **User Interactions:** Users can borrow books, buy books, and access the available library.

### GraphQL Routes Documentation

#### Introduction

This document provides an overview of the GraphQL routes available in the Book Management System application. GraphQL is a query language for APIs that enables clients to request only the data they need, allowing for more efficient and flexible data retrieval.

#### Getting Started

To interact with the GraphQL API, you can use tools like Postman or GraphQL Playground. The GraphQL endpoint is located at `/graphql`. Ensure that the server is running before making requests to the GraphQL API.

#### Authentication

Some GraphQL routes require authentication. You need to include an Authorization header with a valid access token to access these routes. The access token should be obtained by logging in using the `loginUser` mutation.

#### Available Routes

##### Queries
getUsers
```graphql
query {
  getUsers {
    _id
    name
    email
    city
    age
    role
  }
}
```
getBooks
```graphql
query {
  getBooks {
    _id
    title
    genre
    author
    published_year
  }
}
```
getUser
```graphql
query {
  getUser(id: "user_id_here") {
    _id
    name
    email
    city
    age
    role
  }
}
```
getBook
```graphql
query {
  getBook(id: "book_id_here") {
    _id
    title
    genre
    author
    published_year
  }
}
```
##### Mutations
registerUser
```graphql
mutation {
  registerUser(name: "John Doe", email: "john@example.com", pass: "password", role: "reader") {
    _id
    name
    email
    role
  }
}
```
loginUser
```graphql
mutation {
  loginUser(email: "john@example.com", pass: "password") {
    access_token
    refresh_token
  }
}
```
logoutUser
```graphql
mutation {
  logoutUser {
    msg
  }
}
```
addBook
```graphql
mutation {
  addBook(title: "Book Title", genre: "Fantasy", author: "Author Name", published_year: 2022) {
    _id
    title
    genre
    author
    published_year
  }
}
```


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
- Node.js<br>
- Graphql<br>
- Express.js<br>
- MongoDB<br>
- JWT for authentication<br>
- Other libraries/modules as needed
