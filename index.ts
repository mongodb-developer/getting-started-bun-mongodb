import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { prettyJSON } from 'hono/pretty-json';
import { cors } from 'hono/cors';
import client from './lib/mongodb';
import { BooksRoute } from './routes/books';

// Initialized the app with base path
const app = new Hono().basePath('/api/v1');

async function init() {
  try {
    await client;
    console.log('Connected to MongoDB');

    // Initialized logger and prettyJSON
    app.use('*', logger());
    app.use('*', prettyJSON());

    // CORS
    app.use(
      '*',
      cors({
        origin: '*',
        allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
      })
    );

    // Home route
    app.get('/home', (context) => context.text('Welcome to Bun.js with MongoDB!'));

    // Example: localhost:3000/api/v1/home - 'Welcome to Bun.js with MongoDB!'

    // Use the books route
    app.route('/', BooksRoute);

    // Example: localhost:3000/api/v1/books - GET request
    // Example: http://localhost:3001/api/v1/books/66631ee2a1663625e1d9fec7 - PUT request

  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  }
}

// Initialize the app
init();

// Define server port
const port = Bun.env.PORT || 3000;
console.log(`Server is running at ${port}`);
// Export server configuration
export default {
  port,
  fetch: app.fetch,
};
