const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})
app.get('/users', db.getUsers);
app.put('/login/users', db.getUserByEmail);
app.post('/register/users', db.createUser);

app.delete('/users/:id', db.deleteUser);

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})