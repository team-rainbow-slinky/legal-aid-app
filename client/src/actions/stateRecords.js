import { getStateRecords } from '../services/searchMCSO';

export const STATE_RECORDS_LOADING = 'STATE_RECORDS_LOADING';
export const STATE_RECORDS_LOADED = 'STATE_RECORDS_LOADED';
export const STATE_RECORDS_ERROR = 'STATE_RECORDS_ERROR';

export const FETCH_STATE_RECORDS = 'FETCH_STATE_RECORDS';
export const fetchStateRecords = () => ({
  type: FETCH_STATE_RECORDS,
  loadStart: STATE_RECORDS_LOADING,
  loadEnd: STATE_RECORDS_LOADED,
  payload: getStateRecords()
});
