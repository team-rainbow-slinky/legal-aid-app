import { Router } from 'express';
import Booking from '../../models/Booking';
import { HttpError } from '../../middleware/error';
import requireAuth from '../../middleware/requireAuth';
import confirmOrg from '../../middleware/confirmOrg';

export default Router()
  .get('/:bookingId', requireAuth, (req, res, next) => {
    const { bookingId } = req.params;
    const query = { _id: bookingId, org: req.user.org };
    Booking.findOne(query)
    .lean()
    .then(booking => res.json(booking))
    .catch(next);
  })
