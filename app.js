import express from 'express';
import dotenv from 'dotenv'

// dotenv config
dotenv.config();

// Rest Object
const app = express();

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});


export default app;