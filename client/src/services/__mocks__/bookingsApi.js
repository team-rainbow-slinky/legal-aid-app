import seedBookings from '../fixtures/seedBookings';

const bookings = seedBookings;

export const getBookings = () => {
  return Promise.resolve(bookings);
};
