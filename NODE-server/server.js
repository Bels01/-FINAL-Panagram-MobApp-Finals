const express = require('express');
const bodyParser = require('body-parser');
const Cors = require('cors');
const app = express();


app.use(Cors());
app.use(bodyParser.json());

// Dummy user data
let users = [];

// Signup endpoint
app.post('/regform', (req, res) => {
  const { firstName, lastName, email, username, password } = req.body;
  
  // Save the user data
  const newUser = {
    firstName,
    lastName,
    email,
    username,
    password
  };

  users.push(newUser);

  console.log('New user registered:', newUser);
  res.sendStatus(200);
});

// Login endpoint
app.post('/tab1', (req, res) => {
  const { username, password } = req.body;

  // Check if user exists
  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    console.log('User logged in:', user);
    res.sendStatus(200);
  } else {
    console.log('Invalid username or password');
    res.sendStatus(401);
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
