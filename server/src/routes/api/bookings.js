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
    const {
      swisId, org, preferredName, gender,
      pronouns, primaryOrgContact, contacts,
      upcomingDates, meetingHistory, notes,
      mcsoName, mcsoAge, mcsoGender, mcsoRace,
      mcsoHeight, mcsoWeight, mcsoHair, mcsoEyes,
      mcsoArrestingAgency, mcsoBookingDate,
      mcsoAssignedFacility, mcsoProjectedReleaseDate,
      chargesHTML
    } = req.body;

    Booking.create({
      swisId, org, preferredName, gender,
      pronouns, primaryOrgContact, contacts,
      upcomingDates, meetingHistory, notes,
      mcsoName, mcsoAge, mcsoGender, mcsoRace,
      mcsoHeight, mcsoWeight, mcsoHair, mcsoEyes,
      mcsoArrestingAgency, mcsoBookingDate,
      mcsoAssignedFacility, mcsoProjectedReleaseDate,
      chargesHTML
    })
      .then((booking => res.json(booking)))
      .catch(next);
  })

  .post('/bulk', requireAuth, (req, res, next) => {
    const bookings = req.body.map(({
      swisId, org, preferredName, gender,
      pronouns, primaryOrgContact, contacts,
      upcomingDates, meetingHistory, notes,
      mcsoName, mcsoAge, mcsoGender, mcsoRace,
      mcsoHeight, mcsoWeight, mcsoHair, mcsoEyes,
      mcsoArrestingAgency, mcsoBookingDate,
      mcsoAssignedFacility, mcsoProjectedReleaseDate,
      chargesHTML
    }) => ({
      swisId, org, preferredName, gender,
      pronouns, primaryOrgContact, contacts,
      upcomingDates, meetingHistory, notes,
      mcsoName, mcsoAge, mcsoGender, mcsoRace,
      mcsoHeight, mcsoWeight, mcsoHair, mcsoEyes,
      mcsoArrestingAgency, mcsoBookingDate,
      mcsoAssignedFacility, mcsoProjectedReleaseDate,
      chargesHTML
    }));

    Booking.create(bookings)
      .then(bookings => res.json(bookings))
      .catch(next);
  })

  .put('/:bookingId', requireAuth, (req, res, next) => {
    const { bookingId } = req.params;
    const {
      swisId, org, preferredName, gender,
      pronouns, primaryOrgContact, contacts,
      upcomingDates, meetingHistory, notes,
      mcsoName, mcsoAge, mcsoGender, mcsoRace,
      mcsoHeight, mcsoWeight, mcsoHair, mcsoEyes,
      mcsoArrestingAgency, mcsoBookingDate,
      mcsoAssignedFacility, mcsoProjectedReleaseDate,
      chargesHTML
    } = req.body;

    Booking.findByIdAndUpdate(bookingId, {
      swisId, org, preferredName, gender,
      pronouns, primaryOrgContact, contacts,
      upcomingDates, meetingHistory, notes,
      mcsoName, mcsoAge, mcsoGender, mcsoRace,
      mcsoHeight, mcsoWeight, mcsoHair, mcsoEyes,
      mcsoArrestingAgency, mcsoBookingDate,
      mcsoAssignedFacility, mcsoProjectedReleaseDate,
      chargesHTML
    },
    { new: true })
      .then(booking => res.json(booking))
      .catch(next);
  })

  .delete('/:bookingId', requireAuth, (req, res, next) => {
    const { bookingId } = req.params;
    Booking.findByIdAndDelete(bookingId)
      .then(result => res.json(result))
      .catch(next);
  });
  