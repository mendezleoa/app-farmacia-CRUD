import { Router } from 'express';
import { itemsList, itemsGET, itemsPOST, itemsPUT, itemsDELETE } from '../controllers/items.controller.js';

const router = Router();

router.get('/items', itemsList);
router.get('/items', itemsGET);
router.post('/items', itemsPOST);
router.put('/items', itemsPUT);
router.delete('/items', itemsDELETE);

export default router;