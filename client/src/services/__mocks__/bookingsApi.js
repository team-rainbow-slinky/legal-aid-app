import { seedBookings } from '../fixtures/seedBookings';

const bookings = seedBookings;

export const getBookings = () => {
  return Promise.resolve(bookings);
};

export const getBooking = id => {
  return Promise.resolve(bookings.find(booking => booking._id === id));
};

export const updateBooking = booking => {
  return Promise.resolve(booking);
};

export const removeBooking = booking => {
  return Promise.resolve(booking);
};
