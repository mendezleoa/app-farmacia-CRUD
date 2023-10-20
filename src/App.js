import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import itemsRoutes from './routes/items.routes.js'

const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use(morgan('dev'));
app.use(express.json());

app.use(itemsRoutes);

export default app;