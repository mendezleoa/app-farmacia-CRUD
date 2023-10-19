import express from 'express';
import morgan from 'morgan'

import itemsRoutes from './routes/items.routes.js'

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use(itemsRoutes);

export default app;