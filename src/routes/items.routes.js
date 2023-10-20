import { Router } from 'express';
import { itemsList, itemsGET, itemsPOST } from '../controllers/items.controller.js';

const router = Router();

router.get('/items', itemsList);
router.get('/items', itemsGET);
router.post('/items', itemsPOST);

export default router;