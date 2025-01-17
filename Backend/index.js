// Import required modules
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
dotenv.config();


// Connect to MongoDB
const app = express();
const port = 4003;

// Enable CORS for cross-origin requests
app.use(cors());

// Parse JSON request bodies
app.use(express.json());
app.use('/api/user', userRoutes);

// Database URI
const dbURI = process.env.DB_URI;
// const dbURI = "mongodb://localhost:27017"

// Function to connect to MongoDB database
const connectDB = async () => {
    try {
        await mongoose.connect(dbURI);
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
    }
};

// Start the server
connectDB();

// Start the server on specified port
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});