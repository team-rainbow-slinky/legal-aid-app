import reducer from './session';
import {
  SESSION_CREATE,
  SESSION_LOADING,
  SESSION_LOADED,
  SESSION_ERROR,
  SESSION_TOKEN
} from '../actions/session';

jest.mock('../services/auth.js');
jest.mock('../services/request.js');

describe('session reducer', () => {
  const state = {
    token: '',
    user: null,
    loading: true,
    error: null
  };

  it('returns initial state', () => {
    const newState = reducer(state, {});
    expect(newState).toEqual(state);
  });

  it('handles the session create action', () => {
    const newState = reducer(state, { type: SESSION_CREATE, payload: { email: 'test342@dafda.com' } });
    expect(newState.user).toEqual({ email: 'test342@dafda.com' });
  });

  it('handles the session loading', () => {
    const newState = reducer(state, { type: SESSION_LOADING });
    expect(newState.loading).toEqual(true);
  });

  it('handles the session loaded', () => {
    const newState = reducer(state, { type: SESSION_LOADED });
    expect(newState.loading).toEqual(false);
  });

  it('handles a session error', () => {
    const newState = reducer(state, { type: SESSION_ERROR, payload: 'error' });
    expect(newState.user).toEqual(null);
    expect(newState.error).toEqual('error');
  });

  it('handles the session token', () => {
    const newState = reducer(state, { type: SESSION_TOKEN, payload: '???' });
    expect(newState.token).toEqual('???');
  });

});
