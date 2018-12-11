import { Router } from 'express';
import Org from '../../models/Org';
import Booking from '../../models/Booking';
import { HttpError } from '../../middleware/error';
import requireAuth from '../../middleware/requireAuth';
import confirmOrg from '../../middleware/confirmOrg';
import { getMcsoRecords } from '../../services/scraper';

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
  })

  .get('/:orgId/mcso', (req, res, next) => {
    const { orgId } = req.params;
    const query = { org: orgId };

    const promises = [
      Booking.find(query)
              .then(bookings => bookings.map(booking => booking.swisId)),
      getMcsoRecords()
    ];

    Promise.all(promises)
      .then(([swisIds, mcsoBookings]) => {
        return mcsoBookings.filter(mcso => !swisIds.includes(mcso.swisId))
      })
      .then(filteredResults => res.json(filteredResults))
      .catch(next);
  });
