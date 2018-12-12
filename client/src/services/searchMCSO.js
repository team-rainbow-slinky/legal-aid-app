import { get } from './request';
import { getOrgId } from '../selectors/session';
import store from '../store';
import qs from 'querystring';

export const getStateRecords = (query) => {
  const orgId = getOrgId(store.getState());
  const queryString = qs.stringify(query);
  console.log('query:::', queryString);
  return get(`/api/orgs/${orgId}/mcso?${queryString}`);
};

//action, selector, reducer to get state records and then call this function, and then we can plug it in to search to display with connect