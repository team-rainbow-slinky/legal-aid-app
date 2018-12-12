import { get } from './request';
import { getOrgId } from '../selectors/session';
import store from '../store';

export const getStateRecords = () => {
  const orgId = getOrgId(store.getState());
  return get(`/api/orgs/${orgId}/mcso`);
};

//action, selector, reducer to get state records and then call this function, and then we can plug it in to search to display with connect