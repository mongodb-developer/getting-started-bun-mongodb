# Notice: Repository Deprecation
This repository is deprecated and no longer actively maintained. It contains outdated code examples or practices that do not align with current MongoDB best practices. While the repository remains accessible for reference purposes, we strongly discourage its use in production environments.
Users should be aware that this repository will not receive any further updates, bug fixes, or security patches. This code may expose you to security vulnerabilities, compatibility issues with current MongoDB versions, and potential performance problems. Any implementation based on this repository is at the user's own risk.
For up-to-date resources, please refer to the [MongoDB Developer Center](https://mongodb.com/developer).

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
