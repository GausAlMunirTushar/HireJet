import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import connectDB from './config/database.js';

// import routes
import authRoutes from './routes/authRoutes.js';
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

// Error Middleware
app.use(errorMiddleware)


export default app;