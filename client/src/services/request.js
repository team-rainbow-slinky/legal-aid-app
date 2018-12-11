import store from '../store';
import { updateSessionToken } from '../actions/session';

let token = window.localStorage.getItem('token');

const setToken = newToken => {
  token = newToken;
  store.dispatch(updateSessionToken(newToken));
  window.localStorage.setItem('token', newToken);
};

const request = (url, method, body) => {
  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(body)
  })
    .then(res => [res.ok, res.headers, res.json()])
    .then(([ok, headers, json]) => {
      if(!ok) {
        window.alert('Invalid username or password');
        throw json;
      }
      return [headers, json];
    })
    .then(([headers, json]) => {
      const headerToken = headers.get('X-AUTH-TOKEN');
      if(headerToken && headerToken !== token) setToken(headerToken);
      return json;
    });
};

export const get = url => request(url, 'GET');
export const post = (url, body) => request(url, 'POST', body);
