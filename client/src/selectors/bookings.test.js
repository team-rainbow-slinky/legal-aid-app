import { getBookings } from './bookings';
import { seedBookings } from '../services/fixtures/seedBookings';

const state = {
  bookings: {
    list: seedBookings
  }
};

describe('bookings selectors', () => {
  describe('getBookings', () => {
    it('returns a list of all bookings', () => {
      const allBookings = getBookings(state);
      console.log(state);

      seedBookings.forEach(booking => {
        expect(allBookings).toContainEqual(booking);
      });
    });
  });
});
