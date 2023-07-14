const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const PORT = 3001; 
const cors = require('cors');
app.use(cors());
const { Pool } = require('pg');

const pool = new Pool({
  database: 'exam',
  user: 'myuser',
  password: 'mypass',
  host: 'localhost'
});

app.use(express.json());

app.post('/newuser', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Insert email and password into the database
    const queryResult = await pool.query('INSERT INTO users(email, password) VALUES($1, $2) RETURNING id', [email, password]);
    const userId = queryResult.rows[0].id;

    const values = [
      [userId, 1],
      [userId, 2],
      [userId, 3],
      [userId, 4],
      [userId, 5],
      [userId, 6],
      [userId, 7],
      [userId, 8],
      [userId, 9]
    ];

    // Create the parameterized INSERT statement
    const insertQuery = `
      INSERT INTO users_videos(u_id, v_id)
      VALUES ${values.map((_, index) => `($${index * 2 + 1}, $${index * 2 + 2})`).join(', ')}
    `;

    // Flatten the values array
    const flatValues = values.flat();

    // Insert user-video relationships into the users_videos table
    await pool.query(insertQuery, flatValues);

    res.status(200).json({ message: 'User added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.put('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists in the database
    const queryResult = await pool.query('SELECT id, password FROM users WHERE email = $1', [email]);
    const user = queryResult.rows[0];

    if (user) {
      // User exists
      bcrypt.compare(password, user.password, (bcryptError, bcryptResult) => {
        if (bcryptError) {
          throw bcryptError;
        }
        if (bcryptResult) {
          const userId = user.id;

          // Send the user ID and store it in the client's local storage
          res.status(200).send({
            message: 'You are in the system',
            userId: userId
          });
        } else {
          res.status(401).send('Invalid email or password');
        }
      });
    } else {
      // User does not exist or invalid credentials
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get('/getvideos', async (req, res) => {
  try {
    const { userId } = req.query;
    const parsedUserId = parseInt(userId, 10); 
    const { rows } = await pool.query('SELECT videos.*FROM videos JOIN users_videos  ON videos.id = users_videos.v_id WHERE users_videos.u_id = $1',[parsedUserId]);    
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/newvideo', async (req, res) => {
  try {
    const { title, category, url } = req.body;
    const queryResult = await pool.query('INSERT INTO videos(title, category, url) VALUES($1, $2, $3) RETURNING id', [title, category, url]);
    const videoId = queryResult.rows[0].id;
    const { userId } = req.query;
    const parsedUserId = parseInt(userId, 10);
    await pool.query('INSERT INTO users_videos(u_id, v_id) VALUES ($1, $2)', [parsedUserId, videoId]);
    res.status(200).json({ message: 'Video added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
