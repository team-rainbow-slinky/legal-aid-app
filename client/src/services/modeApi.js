import { get } from './request';

export const getMode = () => {
  return get('/api/mode');
};

export const resetData = () => {
  return get('/api/mode/resetData');
};
