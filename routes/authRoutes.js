import express from 'express';
import { register, login } from '../controllers/authController.js';

// Router Object
const router = express.Router();

// routes
// Register Route 
router.post('/register', register)

// Login Route
router.post('/login', login)


export default router;