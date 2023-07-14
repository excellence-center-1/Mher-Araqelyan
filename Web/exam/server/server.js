const express = require('express');
const app = express();
const PORT = 3000; // You can change the port as per your preference

const pgp = require('pg-promise')();
const db = pgp({
  database: '',
  user: 'your_username',
  password: 'your_password',
  host: 'your_host'
});

app.use(express.json());

app.post('/users', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Insert email and password into the database
    await db.none('INSERT INTO users(email, password) VALUES($1, $2)', [email, password]);

    res.status(200).json({ message: 'User added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});