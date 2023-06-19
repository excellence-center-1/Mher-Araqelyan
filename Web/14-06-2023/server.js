const express = require('express')
const fs = require('fs')
const app = express()
const port = 3001
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
function errorHandler(err, req, res, next) {
  console.error(err);
  res.status(500).send('Internal Server Error');
  next(err);
}
app.get('/listUsers', (req, res) => {
  fs.readFile(__dirname + "/" + "users.json", 'utf8', (err, data) => {
    console.log(req.url);
    res.end(data);
  });
})

app.post('/addUser', (req, res,next) => {
  // Read the existing users from the file
  fs.readFile(__dirname + "/users.json", 'utf8', (err, data) => {
    
    if (err) {
      return next(err);
    }

    // Parse the JSON data to an object
    const usersObject = JSON.parse(data);

    // Generate a unique ID for the new user
    const newUserId = Object.keys(usersObject).length + 1;

    // Create a new user object
    const newUser = {
      name: "XXX",
      password: "passwordXXX",
      profession: "teacherXXX",
      id: newUserId
    };

    // Add the new user to the users object
    usersObject[`user${newUserId}`] = newUser;

    // Convert the updated users object back to JSON
    const updatedUsers = JSON.stringify(usersObject, null, 2);

    // Write the updated users back to the file
    fs.writeFile(__dirname + "/users.json", updatedUsers, (err) => {
      if (err) {
        return next(err);
      }

      res.status(200).send('User added successfully');
    });
  });
});
app.delete('/deleteUser/:id', (req, res, next) => {
  // Read the existing users from the file

  fs.readFile(__dirname + "/users.json", 'utf8', (err, data) => {
    if (err) {
      return next(err);
    }

    // Parse the JSON data to an object
    const usersObject = JSON.parse(data);

    // Get the user ID from the request parameters
    const userId = req.params.id;

    // Check if the user ID exists in the users object
    if (usersObject[`user${userId}`]) {
      // Delete the user from the users object
      delete usersObject[`user${userId}`];

      // Convert the updated users object back to JSON
      const updatedUsers = JSON.stringify(usersObject, null, 2);

      // Write the updated users back to the file
      fs.writeFile(__dirname + "/users.json", updatedUsers, (err) => {
        if (err) {
          return next(err);
        }

        res.status(200).send('User deleted successfully');
      });
    } else {
      res.status(404).send('User not found');
    }
  });
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})