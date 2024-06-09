import type { Context } from "hono";
import client from "../lib/mongodb";
import { ObjectId } from "mongodb";

const db = client.db("library");

// Get all books
export const getBooks = async (c: Context) => {
  const books = await db.collection("books").find().toArray();
  return c.json({ books });
};

// Get a single book by ID
export const getBookById = async (c: Context) => {
  const { id } = c.req.param();
  const book = await db.collection("books").findOne({ _id: new ObjectId(id) });

  if (!book) {
    return c.json({ message: "Book not found" }, 404);
  }

  return c.json({ book });
};

// Create a new book
export const createBook = async (c: Context) => {
  const newBook = await c.req.json();

  const result = await db.collection("books").insertOne(newBook);
  return c.json({ message: "Book created", bookId: result.insertedId }, 201);
};

// Update an existing book by ID
export const updateBook = async (c: Context) => {
  const { id } = c.req.param();
  const updatedBook = await c.req.json();

  const result = await db
    .collection("books")
    .updateOne({ _id: new ObjectId(id) }, { $set: updatedBook });

  if (result.matchedCount === 0) {
    return c.json({ message: "Book not found" }, 404);
  }

  return c.json({ message: "Book updated", acknowledged: result.acknowledged });
};

// Delete a book by ID
export const deleteBook = async (c: Context) => {
  const { id } = c.req.param();

  const result = await db
    .collection("books")
    .deleteOne({ _id: new ObjectId(id) });

  if (result.deletedCount === 0) {
    return c.json({ message: "Book not found" }, 404);
  }

  return c.json({ message: "Book deleted", acknowledged: result.acknowledged });
};
