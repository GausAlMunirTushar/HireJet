import express from 'express';
import userAuth from '../middlewares/authMiddleware.js';
import { createJob, getJob } from '../controllers/jobController.js';

const router = express.Router();

// routes
// CREATE JOB || POST
router.post('/createJob', userAuth, createJob)

// GET All JOBS || GET
router.get('/getJob', userAuth, getJob)

export default router;