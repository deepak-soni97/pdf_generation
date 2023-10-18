// Import the connectDB function from the 'db' module
const { connectDB } = require('../config/db');

// Import the generatePDF function from the 'pdfService' module
const { generatePDF } = require('../services/pdfService');

// Define an asynchronous function to generate a database report
   const generateDatabaseReport = async(req,res) => {

  try{
    
    // Connect to the database using the 'connectDB' function
  const db = await connectDB();

  const moviesData = await db.collection('movies').find({}).toArray(); // Retrieve movies data from the 'movies' collection
  const seriesData = await db.collection('series').find({}).toArray();
  const userActivitiesData = await db.collection('useractivities').find({}).toArray();
  const usersData = await db.collection('users').find({}).toArray();

  // Combine the retrieved data into a single object
  const combinedData = {
    movies: moviesData,
    series: seriesData,
    userActivities: userActivitiesData,
    users: usersData,
  };

  // Generate a PDF report using the combined data
  generatePDF(combinedData);

  res.status(200).json({message: 'PDF report generation initiated. Check your project directory for the generated PDF.'})

  }catch(error){
    res.status(500).json({ error: error.message })
  }  
}

// Export the generateDatabaseReport function
module.exports = {
  generateDatabaseReport,
};
