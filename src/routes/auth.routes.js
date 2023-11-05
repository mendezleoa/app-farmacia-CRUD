import { Router } from 'express';
import { usersList, usersGET, usersPOST, usersPUT, usersDELETE } from '../controllers/auth.controller.js';

const router = Router();

router.get('/users', usersList);
router.get('/login', usersGET);
router.post('/register', usersPOST);
router.put('/users', usersPUT);
router.delete('/users', usersDELETE);

export default router;