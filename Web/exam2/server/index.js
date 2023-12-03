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
  let attempts = 0;
  const tryConnect = async () => {
    try {
      console.log(111);
      await sequelize.authenticate();
      clearInterval(retryInterval);
    } catch (error) {
      console.error('Failed to connect to the database. Retrying...');
      attempts++;
      if (attempts >= maxAttempts) {
        clearInterval(retryInterval);
        console.error('Exceeded maximum connection attempts.');
      }
    }
  };
  const retryInterval = setInterval(tryConnect, delay);
};

connectToDatabase();


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
