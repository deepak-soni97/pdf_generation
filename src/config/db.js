require('dotenv').config
const { MongoClient } = require('mongodb');

// Define your MongoDB connection URL
MONGODB_URL = process.env.MONGODB_URL;

const uri = MONGODB_URL;
const client = new MongoClient(uri);

// Establish a connection to the database
async function connectDB() {
    try{

        await client.connect();
        return client.db('movies')

    }catch(error){
        console.log(error);
         throw error;
        }
}


// Export the conectDB function
module.exports ={ 
    connectDB
}