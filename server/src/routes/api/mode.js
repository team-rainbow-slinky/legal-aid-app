import { Router } from 'express';
import { HttpError } from '../../middleware/error';
import mongoose from 'mongoose';

export default Router()
  .get('/', (req, res) => {
    const mode = process.env.MODE;
    res.json(mode);
  })

  .get('/dropAll', (req, res) => {
    const mode = process.env.MODE;
    if(mode.toUpperCase() === 'DEMO') {
      mongoose.connection.dropDatabase();
      res.json({ drop: true });
    } else {
      res.json({ drop: false });
    }
  });
