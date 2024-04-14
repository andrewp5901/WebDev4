console.log("Starting the server...");
const express = require('express');
const cors = require('cors');
const app = express();



app.use(cors({
    origin: 'http://localhost:4200'  // This should match the port your Angular app is served on
  }));
app.use(express.json()); // Middleware to parse JSON bodies

const posts = []; // This will store posts in memory

app.get('/posts', (req, res) => {
  res.json(posts);
});

app.post('/posts', (req, res) => {
  posts.push(req.body); // Add new post to the array
  res.status(201).send();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
