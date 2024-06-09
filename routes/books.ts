import { Hono } from "hono";
import {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} from "../controllers/books";

const app = new Hono();

app.get("/books", getBooks); // To get all books
app.get("/books/:id", getBookById); // To get a book by ID
app.post("/books", createBook); // To create a new book
app.put("/books/:id", updateBook); // To update an existing book
app.delete("/books/:id", deleteBook); // To delete a book

export { app as BooksRoute };
