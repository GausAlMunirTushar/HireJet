import express from 'express';
import 'express-async-errors'
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import connectDB from './config/database.js';

// import routes
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js'
import jobRoutes from './routes/jobRoutes.js'

import errorMiddleware from './middlewares/errorMiddleware.js';

// dotenv config
dotenv.config();

// Rest Object
const app = express();

// MongoDB Connection
connectDB()

// Middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

// Routes
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/user', userRoutes)
app.use('/api/v1/job', jobRoutes)

// Error Middleware
app.use(errorMiddleware)


export default app;