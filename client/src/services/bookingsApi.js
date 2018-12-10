import { get } from './request';
import { seedBookings } from '../services/fixtures/seedBookings';

export const getBookings = () => {
  // return get('/api/bookings');
  return Promise.resolve(seedBookings);
};

export const getBooking = id => {
  return Promise.resolve(seedBookings.find(booking => booking._id === id));
  // return get(`/api/bookings/${id}`);
};

export const updateBooking = () => {

};
