import { get } from './request';
import { seedBookings } from '../services/fixtures/seedBookings';
import store from '../store';
import { getOrgId } from '../selectors/session';

export const getBookings = () => {
  const orgId = getOrgId(store.getState());
  return get(`/api/orgs/${orgId}/bookings`);
};

export const getBooking = id => {
  return Promise.resolve(seedBookings.find(booking => booking._id === id));
  // return get(`/api/bookings/${id}`);
};

export const updateBooking = () => {

};
