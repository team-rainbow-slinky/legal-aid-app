import { getMode } from '../services/modeApi';

export const FETCH_MODE = 'FETCH_MODE';

export const fetchMode = () => ({
  type: FETCH_MODE,
  payload: getMode()
});
