import express from 'express';
import { register } from '../controllers/authController.js';

// Router Object
const router = express.Router();

// routes
// Signup Route 
router.post('/register', register)


export default router;