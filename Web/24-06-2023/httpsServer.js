const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();

// Set up your routes
app.get('/', (req, res) => {
  res.send('Hello, HTTPS!');
});

// Read the SSL certificate and private key files
const options = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem')
};

// Create the HTTPS server
const server = https.createServer(options, app);

// Start the server
server.listen(446, () => {
  console.log('HTTPS server running on port 443');
});
