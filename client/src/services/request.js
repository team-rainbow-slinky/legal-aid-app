import store from '../store';
import { updateSessionToken } from '../actions/session';
import { getSessionToken } from '../selectors/session';

let token = window.localStorage.getItem('token');

const setToken = newToken => {
  token = newToken;
  window.localStorage.setItem('token', newToken);
  store.dispatch(updateSessionToken(newToken));
};

store.subscribe(() => {
  const storeToken = getSessionToken(store.getState());
  if(storeToken !== token) {
    token = window.localStorage.getItem('token');
  }
});

const request = (url, method, body) => {
  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(body)
  })
    .then(res => Promise.all([res.ok, res.headers, res.json()]))
    .then(([ok, headers, json]) => {
      if(!ok) {
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
export const put = (url, body) => request(url, 'PUT', body);
export const remove = (url, body) => request(url, 'DELETE', body);
