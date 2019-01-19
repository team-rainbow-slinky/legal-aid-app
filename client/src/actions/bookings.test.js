import {
  editBooking, BOOKING_EDIT,
  fetchBookings, FETCH_BOOKINGS,
  fetchBooking, FETCH_BOOKING,
  deleteBooking, BOOKING_DELETE
} from './bookings';

const fakeBooking = {
  swisId: '67890',
  preferredName: 'Slice McGee',
  gender: 'Non-binary',
  pronouns: 'they/them',
  primaryOrgContact: 'Molly Helper',
  contacts: 'Mother:  503-123-1234',
  upcomingDates: 'Arraignment on 12/30/2018',
  notes: 'Not even part of protest.',
  mcsoName: 'Jeff Delaney',
  mcsoAge: 32,
  mcsoGender: 'M',
  mcsoRace: 'White',
  mcsoHeight: '5 ft 10 in',
  mcsoWeight: '160 lbs',
  mcsoHair: 'Blue',
  mcsoEyes: 'Green',
  mcsoArrestingAgency: 'Portland Police, Central Precinct',
  mcsoBookingDate: '10/20/2018 6:33 PM',
  mcsoAssignedFacility: 'MCDC',
  mcsoProjectedReleaseDate: 'Unknown'
};

jest.mock('../services/bookingsApi.js');

describe('bookings actions', () => {

  it('creates an action to get all bookings', () => {
    const bookings = fetchBookings();
    expect(bookings.type).toEqual(FETCH_BOOKINGS);
  });

  it('creates an action to get one booking', () => {
    const booking = fetchBooking();
    expect(booking.type).toEqual(FETCH_BOOKING);
  });

  it('creates an action to update a booking', () => {
    const booking = editBooking(fakeBooking);
    expect(booking.type).toEqual(BOOKING_EDIT);
  });

  it('creates an action to delete a booking', () => {
    const action = deleteBooking(fakeBooking);
    expect(action.type).toEqual(BOOKING_DELETE);
  });
});
