import express from 'express'
import userAuth from '../middlewares/authMiddleware.js'
import { updateUser } from '../controllers/userController.js';

// router object
const router = express.Router()
// UPDATE USER || PUT
router.put('/updateUser', userAuth, updateUser )

export default router;