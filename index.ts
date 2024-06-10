import { Hono } from "hono";
import { cors } from "hono/cors";
import client from "./lib/mongodb";
import { BooksRoute } from "./routes/books";

const app = new Hono();

async function connect() {
  try {
    await client;
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  }
}

// CORS
app.use(
  "*",
  cors({
    origin: "*",
    allowMethods: ["GET", "POST", "PUT", "DELETE"],
  }),
);

app.get("/", (context) => context.text("Welcome to Bun.js with MongoDB!"));

// Example: localhost:3000/ - 'Welcome to Bun.js with MongoDB!'

// Use the books route
app.route("/api", BooksRoute);

// Example: localhost:3000/api/books - GET request
// Example: http://localhost:3001/api/books/66631ee2a1663625e1d9fec7 - PUT request

connect();

const port = Bun.env.PORT || 3000;
console.log(`Server is running at ${port}`);

export default {
  port,
  fetch: app.fetch,
};
