import type { Context } from "hono";
import client from "../lib/mongodb";
import { ObjectId } from "mongodb";

const db = client.db("library");

// Create a new book
export const createBook = async (c: Context) => {
  try {
    const newBook = await c.req.json();

    const result = await db.collection("books").insertOne(newBook);
    return c.json({ message: "Book created", bookId: result.insertedId }, 201);
  } catch (error) {
    return c.json(
      { message: "Failed to create book", error: error.message },
      500,
    );
  }
};

// Get all books
export const getBooks = async (c: Context) => {
  try {
    const books = await db.collection("books").find().toArray();
    return c.json({ books });
  } catch (error) {
    return c.json(
      { message: "Failed to retrieve books", error: error.message },
      500,
    );
  }
};

// Get a single book by ID
export const getBookById = async (c: Context) => {
  try {
    const { id } = c.req.param();
    const book = await db
      .collection("books")
      .findOne({ _id: new ObjectId(id) });

    if (!book) {
      return c.json({ message: "Book not found" }, 404);
    }

    return c.json({ book });
  } catch (error) {
    return c.json(
      { message: "Failed to retrieve book", error: error.message },
      500,
    );
  }
};

// Update an existing book by ID
export const updateBook = async (c: Context) => {
  try {
    const { id } = c.req.param();
    const updatedBook = await c.req.json();

    const result = await db
      .collection("books")
      .updateOne({ _id: new ObjectId(id) }, { $set: updatedBook });

    if (result.matchedCount === 0) {
      return c.json({ message: "Book not found" }, 404);
    }

    return c.json({
      message: "Book updated",
      acknowledged: result.acknowledged,
    });
  } catch (error) {
    return c.json(
      { message: "Failed to update book", error: error.message },
      500,
    );
  }
};

// Delete a book by ID
export const deleteBook = async (c: Context) => {
  try {
    const { id } = c.req.param();

    const result = await db
      .collection("books")
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return c.json({ message: "Book not found" }, 404);
    }

    return c.json({
      message: "Book deleted",
      acknowledged: result.acknowledged,
    });
  } catch (error) {
    return c.json(
      { message: "Failed to delete book", error: error.message },
      500,
    );
  }
};
