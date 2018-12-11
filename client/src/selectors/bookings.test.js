import { getBookings, getBooking } from './bookings';
import { seedBookings } from '../services/fixtures/seedBookings';

const state = {
  bookings: {
    list: seedBookings,
    detail: { hi: 'hi' }
  }
};

describe('bookings selectors', () => {
  it('returns a list of all bookings', () => {
    const allBookings = getBookings(state);

    seedBookings.forEach(booking => {
      expect(allBookings).toContainEqual(booking);
    });
  });

  it('returns the chosen detail booking', () => {
    const oneBooking = getBooking(state);

    expect(oneBooking).toEqual({ hi: 'hi' });
  });
});
