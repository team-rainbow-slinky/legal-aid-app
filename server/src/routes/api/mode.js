import { Router } from 'express';
import mongoose from 'mongoose';
import generateInitialData from '../../heroku/dataCreator';

export default Router()
  .get('/', (req, res) => {
    const mode = process.env.MODE;
    res.json(mode);
  })

  .get('/resetData', (req, res, next) => {
    const mode = process.env.MODE;
    if(mode.toUpperCase() === 'DEMO') {

      mongoose.connection.dropDatabase();
      generateInitialData()
        .then(() => res.json({ resetData: true }))
        .catch(next);

    } else {
      res.json({ resetData: false });
    }
  });
