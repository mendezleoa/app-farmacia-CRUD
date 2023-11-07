import { Router } from 'express';
import { register, login, logout, profile, verifyToken } from '../controllers/auth.controller.js';
import { authRequired } from '../middleware/validateToken.js';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.post('/profile', authRequired, profile);

router.get('/verifyToken', verifyToken);

export default router;