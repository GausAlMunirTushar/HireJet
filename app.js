import express from 'express';
import dotenv from 'dotenv'
import connectDB from './config/database.js';

// dotenv config
dotenv.config();

// Rest Object
const app = express();

// MongoDB Connection
connectDB()

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});


export default app;