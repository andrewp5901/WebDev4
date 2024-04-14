console.log("Starting the server...");
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'http://localhost:4200'  // Allow requests from Angular app
}));
app.use(express.json()); // Middleware to parse JSON bodies

// Handle requests to the root URL
app.get('/', (req, res) => {
  res.send('Hello from the Node.js server!');
});

const posts = []; // Store posts in memory

// Return all posts
app.get('/posts', (req, res) => {
  res.json(posts);
});

// Add a new post
app.post('/posts', (req, res) => {
  posts.push(req.body); // Add new post to the array
  res.status(201).send();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
