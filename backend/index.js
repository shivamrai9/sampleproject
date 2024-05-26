import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';

// Initialize dotenv to use environment variables
dotenv.config()

// Create an Express application
const app = express()

// Configure CORS middleware
app.use(cors());
app.use(express.json())



// Connect to MongoDB
mongoose.connect(process.env.MONGOURL)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Failed to connect to MongoDB', error));
 


// Define routes
app.use('/auth', userRoutes);



// Start the server
const port =  5000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})