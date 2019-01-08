import { get, post } from './request';
import { getOrgId } from '../selectors/session';
import store from '../store';
import qs from 'querystring';

export const getStateRecords = (query) => {
  const orgId = getOrgId(store.getState());
  const queryString = qs.stringify(query);
  return get(`/api/orgs/${orgId}/mcso?${queryString}`);
};

export const addRecords = (recordsToAdd) => {
  return post('/api/bookings/bulk', recordsToAdd);
};
