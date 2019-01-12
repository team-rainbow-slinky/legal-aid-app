import express from 'express';
import morgan from 'morgan';
import userRoutes from './api/users';
import orgRoutes from './api/orgs';
import bookingRoutes from './api/bookings';
import modeRoutes from './api/mode';
import { errorHandler } from '../middleware/error';
import spa from '../middleware/spa';
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('../client/dist'));

app.use('/api/users', userRoutes);
app.use('/api/orgs', orgRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/mode', modeRoutes);

app.use('*', spa('../client/dist/index.html'));

app.use(errorHandler);

export default app;
