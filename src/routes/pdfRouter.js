const express = require('express');

//create a new instance of an Express router
const router = express.Router();

// Import the PDF controller
const pdfController = require('../controllers/pdfController');

//Define a route to generate a PDF resport
router.get('/generate-pdf', pdfController.generateDatabaseReport);

//Export the router for use in other of the application
module.exports = router;
