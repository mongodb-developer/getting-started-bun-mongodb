# Getting Started with Bun and MongoDB

## Introduction

This project sets up a server using JavaScript runtime [Bun](https://bun.sh/) and [MongoDB](www.monogodb.com), using the [Hono](https://hono.dev/) framework for routing and controllers.

## Prerequisites

- [Bun](https://bun.sh/docs/installation)
- MongoDB instance or [MongoDB Atlas account](https://account.mongodb.com/account/login?utm_campaign=devrel&utm_content=mdbw&utm_term=kushagra.kesav)

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repo-url>
   cd getting-started-bun-mongodb
   ```

2. **Install dependencies:**

   ```bash
   bun install
   ```

3. **Configure MongoDB:**

   Create a `.env` file in the root directory with your MongoDB URI and Port:

   ```env
   MONGODB_URI=the_mongodb_uri
   PORT=<port>
   ```

## Usage

1. **Start the server:**

   ```bash
   bun run start
   ```

2. **Access the server:**

   Visit `http://localhost:3000` (default port, configurable via `.env`).

## API Endpoints

- **Root:**

  ```http
  GET /
  ```

  Response: `Welcome to Bun.js with MongoDB!`

- **Books API:**

  - **Get all books:** `GET /api/books`
  - **Get a book by ID:** `GET /api/books/:id`
  - **Create a book:** `POST /api/books`
  - **Update a book:** `PUT /api/books/:id`
  - **Delete a book:** `DELETE /api/books/:id`
