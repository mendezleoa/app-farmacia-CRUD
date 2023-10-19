import { Router } from 'express';
import { itemsPOST } from '../controllers/items.controller.js';

const router = Router();

router.post('/items', itemsPOST)

export default router;