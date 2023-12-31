import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import usersRoutes from './routes/auth.routes.js';
import itemsRoutes from './routes/items.routes.js';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use(usersRoutes);
app.use(itemsRoutes);

export default app;