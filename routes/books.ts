import { Hono } from 'hono';
import { getBooks, getBookById, createBook, updateBook, deleteBook } from '../controllers/books';

const app = new Hono();

app.get('/books', getBooks); // Route to get all books
app.get('/books/:id', getBookById); // Route to get a book by ID
app.post('/books', createBook); // Route to create a new book
app.put('/books/:id', updateBook); // Route to update an existing book
app.delete('/books/:id', deleteBook); // Route to delete a book

export { app as BooksRoute };