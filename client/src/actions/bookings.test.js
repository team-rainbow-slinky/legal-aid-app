import { editBooking, BOOKING_EDIT, fetchBookings, FETCH_BOOKINGS } from './bookings';
import { getBookings } from '../services/bookingsApi';

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
  describe('getBookings action', () => {
    it('creates an action to get all bookings', () => {
      const booking = fetchBookings();
      expect(booking.type).toEqual(FETCH_BOOKINGS);
    });
  });


  it('creates an action to update a booking', () => {
    const booking = editBooking(fakeBooking);
    expect(booking).toEqual({
      type: BOOKING_EDIT,
      payload: fakeBooking
    });
  });
});
