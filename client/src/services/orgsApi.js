import { getOrgId } from '../selectors/session';
import store from '../store';
import { get } from './request';

export const getOrg = () => {
  const orgId = getOrgId(store.getState());
  return get(`/api/orgs/${orgId}`);
};
