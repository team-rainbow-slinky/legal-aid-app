import { Router } from 'express';
import Org from '../../models/Org';
import Booking from '../../models/Booking';
import { HttpError } from '../../middleware/error';
import requireAuth from '../../middleware/requireAuth';
import confirmOrg from '../../middleware/confirmOrg';

export default Router()
  .get('/:orgId', requireAuth, confirmOrg, (req, res, next) => {
    const { orgId } = req.params;
    Org.findById(orgId)
    .lean()
    .then(org => res.json(org))
    .catch(next);
  })

  .get('/:orgId/bookings', requireAuth, confirmOrg, (req, res, next) => {
    const { orgId } = req.params;
    const query = { org: orgId };
    Booking.find(query)
    .lean()
    .then(bookings => res.json(bookings))
    .catch(next);
  });