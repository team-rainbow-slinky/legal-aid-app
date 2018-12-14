import { Router } from 'express';
import Org from '../../models/Org';
import Booking from '../../models/Booking';
import { HttpError } from '../../middleware/error';
import requireAuth from '../../middleware/requireAuth';
import confirmOrg from '../../middleware/confirmOrg';
import { getMcsoRecords } from '../../services/scraper';
import moment from 'moment';

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
    const { name, start, end } = req.query;

    let queryName;
    let queryStart;
    let queryEnd;

    if(name) queryName = name.toUpperCase();
    if(start) queryStart = moment(start, 'YYYY-MM-DDTHH:mm:ss.SSSZ', true);
    if(end) queryEnd = moment(end, 'YYYY-MM-DDTHH:mm:ss.SSSZ', true);

    const promises = [
      Booking.find(query)
        .then(bookings => bookings.map(booking => booking.swisId)),
      getMcsoRecords()
    ];

    Promise.all(promises)
      .then(([swisIds, mcsoBookings]) => {
        return mcsoBookings.filter(mcso => {
          return !swisIds.includes(mcso.swisId)
          && includesName(queryName, mcso.mcsoName)
          && isInTimeFrame(queryStart, queryEnd, mcso.mcsoBookingDate);
        });
      })
      .then(filteredResults => res.json(filteredResults))
      .catch(next);
  });

function includesName(name, mcso) {
  if(!name) return true;
  mcso = mcso.toUpperCase();
  return mcso.includes(name);
}

function isInTimeFrame(startDate, endDate, mcso) {
  if(!startDate || !endDate) return true;
  if(!mcso) return false;
  const mcsoDate = moment(mcso + '-08:00', 'MM/DD/YYYY hh:mm A-HH:mm', true);
  if(!mcsoDate.isValid() || !startDate.isValid() || !endDate.isValid()) return false;
  if(mcsoDate.isSameOrAfter(startDate) && mcsoDate.isSameOrBefore(endDate)) return true;
  return false;
}
