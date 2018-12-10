import { getBookings } from "../services/bookingsApi";

export const FETCH_BOOKINGS = 'FETCH_BOOKINGS'
export const fetchBookings = () => ({
  type: FETCH_BOOKINGS,
  payload: getBookings()
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