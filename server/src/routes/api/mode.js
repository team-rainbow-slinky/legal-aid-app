import { Router } from 'express';
import { HttpError } from '../../middleware/error';

export default Router()
  .get('/', (req, res) => {
    const mode = process.env.MODE;
    res.json(mode);
  })

  .get('/drop', (req, res) => {

    res.json({ drop: true });
  });
