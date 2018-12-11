import { getBookings, getBooking } from '../services/bookingsApi';

export const BOOKING_LOADING = 'BOOKING_LOADING';
export const BOOKING_LOADED = 'BOOKING_LOADED';
export const BOOKING_ERROR = 'BOOKING_ERROR';

export const FETCH_BOOKINGS = 'FETCH_BOOKINGS';
export const fetchBookings = () => ({
  type: FETCH_BOOKINGS,
  payload: getBookings()
});

export const FETCH_BOOKING = 'FETCH_BOOKING';
export const fetchBooking = id => ({
  type: FETCH_BOOKING,
  payload: getBooking(id)
});

export const BOOKING_EDIT = 'BOOKING_EDIT';
export const editBooking = ({
  swisId,
  preferredName,
  gender,
  pronouns,
  primaryOrgContact,
  contacts,
  upcomingDates,
  notes,
  mcsoName,
  mcsoAge,
  mcsoGender,
  mcsoRace,
  mcsoHeight,
  mcsoWeight,
  mcsoHair,
  mcsoEyes,
  mcsoArrestingAgency,
  mcsoBookingDate,
  mcsoAssignedFacility,
  mcsoProjectedReleaseDate
}) => ({
  type: BOOKING_EDIT,
  payload: {
    swisId,
    preferredName,
    gender,
    pronouns,
    primaryOrgContact,
    contacts,
    upcomingDates,
    notes,
    mcsoName,
    mcsoAge,
    mcsoGender,
    mcsoRace,
    mcsoHeight,
    mcsoWeight,
    mcsoHair,
    mcsoEyes,
    mcsoArrestingAgency,
    mcsoBookingDate,
    mcsoAssignedFacility,
    mcsoProjectedReleaseDate
  }
});
