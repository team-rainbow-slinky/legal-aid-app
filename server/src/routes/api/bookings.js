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

  .post('/', requireAuth, (req, res, next) => {
    const cleanedBooking = cleanBooking(req.body);
    Booking.create(cleanedBooking)
      .then((booking => res.json(booking)))
      .catch(next);
  })

  .post('/bulk', requireAuth, (req, res, next) => {
    const bookings = req.body.map(cleanBooking);
    Booking.create(bookings)
      .then(bookings => res.json(bookings))
      .catch(next);
  })

  .put('/:bookingId', requireAuth, (req, res, next) => {
    const { bookingId } = req.params;
    const cleanedBooking = cleanBooking(req.body);
    Booking.findByIdAndUpdate(bookingId,
      cleanedBooking,
      { new: true })
      .then(booking => res.json(booking))
      .catch(next);
  })

  .delete('/:bookingId', requireAuth, (req, res, next) => {
    const { bookingId } = req.params;
    Booking.findByIdAndDelete(bookingId)
      .then(deletedBooking => {
        res.json({ removed: !!deletedBooking });
      })
      .catch(next);
  });

const cleanBooking = (uncleanBooking) => {
  const {
    swisId, org, preferredName, gender,
    pronouns, primaryOrgContact, contacts,
    upcomingDates, meetingHistory, notes,
    mcsoName, mcsoAge, mcsoGender, mcsoRace,
    mcsoHeight, mcsoWeight, mcsoHair, mcsoEyes,
    mcsoArrestingAgency, mcsoBookingDate,
    mcsoAssignedFacility, mcsoProjectedReleaseDate,
    chargesHTML
  } = uncleanBooking;
  return {
    swisId, org, preferredName, gender,
    pronouns, primaryOrgContact, contacts,
    upcomingDates, meetingHistory, notes,
    mcsoName, mcsoAge, mcsoGender, mcsoRace,
    mcsoHeight, mcsoWeight, mcsoHair, mcsoEyes,
    mcsoArrestingAgency, mcsoBookingDate,
    mcsoAssignedFacility, mcsoProjectedReleaseDate,
    chargesHTML
  };
};
