// Load environment variables from a .env file
require('dotenv').config();

// Import the Express framework
const express = require('express');

// Create a new instance of an Express application
const app = express();

// Define the port where the server will listen, using either the value from the environment variable PORT or a default value of 3300
const PORT = process.env.PORT || 3300;

// Import the PDF router
const pdfRouter = require('./routes/pdfRouter')

// Use the PDF router to handle routes starting with ''
app.use('', pdfRouter);

// Start the Express server and listen on the specified port
app.listen(PORT, () =>{
    console.log(`Server run on port ${PORT}`);
})