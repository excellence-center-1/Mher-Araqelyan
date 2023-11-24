require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const { seedData } = require('./seeders/videosSeeder');
const cors = require('cors');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandler);

const connectToDatabase = async () => {
  const maxAttempts = 60; 
  const delay = 1000; 
  for (let i = 0; i < maxAttempts; i++) {
    try {
      await sequelize.authenticate();
      break;
    } catch (error) {
      console.error('Failed to connect to the database. Retrying...');
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
};

const start = async () => {
  try {
    await connectToDatabase();
    await sequelize.sync();
    await seedData();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
