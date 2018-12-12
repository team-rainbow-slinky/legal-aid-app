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

    // start = '12/10/2018 07:14 PM';
    // const queryName = name ? name.toUpperCase() : name;
    // const queryStart = start ? moment(start) : start;
    // const queryEnd = end ? moment(end) : end;
    // console.log('qName', queryName, 'qStart', queryStart, 'qEnd', queryEnd);

    const promises = [
      Booking.find(query)
              .then(bookings => bookings.map(booking => booking.swisId)),
      getMcsoRecords()
    ];

    Promise.all(promises)
      .then(([swisIds, mcsoBookings]) => {
        return mcsoBookings.filter(mcso => {
          return !swisIds.includes(mcso.swisId)
          && includesName(name, mcso.mcsoName)
        })
      })
      .then(filteredResults => res.json(filteredResults))
      .catch(next);
  });

  function includesName(name, mcso) {
    if(!name) return true;
    name = name.toUpperCase();
    mcso = mcso.toUpperCase();
    return mcso.includes(name);
  }

  function isInTimeFrame(start, end) {

  }