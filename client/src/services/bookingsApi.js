import { seedBookings } from '../services/fixtures/seedBookings';
import store from '../store';
import { getOrgId } from '../selectors/session';
import { get, put, remove } from './request';

export const getBookings = () => {
  const orgId = getOrgId(store.getState());
  return get(`/api/orgs/${orgId}/bookings`)
    .then(bookings => {
      return bookings.reduce((acc, item) => {
        acc[item._id] = item;
        return acc;
      }, {});
    });
};

export const getBooking = id => {
  return Promise.resolve(seedBookings.find(booking => booking._id === id));
};

export const updateBooking = booking => {
  const id = booking._id;
  return put(`/api/bookings/${id}`, booking);
};

export const removeBooking = booking => {
  const id = booking._id;
  return remove(`/api/bookings/${id}`, booking);
};
