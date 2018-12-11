import { Router } from 'express';
import Org from '../../models/Org';
import { HttpError } from '../../middleware/error';
import requireAuth from '../../middleware/requireAuth';
import confirmOrg from '../../middleware/confirmOrg';

export default Router()
  .get('/:id', requireAuth, confirmOrg, (req, res, next) => {
    const { id } = req.params;
    Org.findById(id)
    .lean()
    .then(org => res.json(org))
    .catch(next);
  });