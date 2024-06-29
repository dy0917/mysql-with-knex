const express = require('express');
require('dotenv').config();
require('./db');
const userController = require('./controllers/userController');
const relationshipController = require('./controllers/relationshipController');
// const userRoute = require('./routes/userRoute');

const app = express();
app.use(express.json());
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
  userController.getUsers(res);
});

app.post('/users', (req, res) => {
  userController.createUser(req.body, res);
});

app.post('/relationships', (req, res) => {
  relationshipController.createRelationship(req.body, res);
});

app.get('/relationships', (req, res) => {
  relationshipController.getRelationships( res);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
