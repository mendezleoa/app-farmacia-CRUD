import { Router } from 'express';
import { itemsListGet, itemsGET, itemsPOST, itemsPUT, itemsDELETE } from '../controllers/items.controller.js';
import { authRequired } from '../middleware/validateToken.js';

const router = Router();

router.get('/items', itemsListGet);
router.get('/items/search/:nombreprod', authRequired, itemsGET);
router.post('/items', authRequired, itemsPOST);
router.put('/items/:id', authRequired, itemsPUT);
router.delete('/items/:id', authRequired, itemsDELETE);

export default router;