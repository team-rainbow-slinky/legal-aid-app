import { post, get } from './request';

export const login = ({ email, password }) => {
  return post('/api/users/login', { email, password });
};

export const verifySession = () => {
  return get('/api/auth/verify');
};
