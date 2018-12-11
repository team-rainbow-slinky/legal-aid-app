import {
  login,
  refreshSession,
  updateSessionToken,
  SESSION_CREATE,
  SESSION_TOKEN
} from './session';

jest.mock('../services/request');

describe('login actions', () => {
  it('has session_create as its type', () => {
    const action = login('user1@gmail.com', 'password');
    
    expect(action.type).toEqual(SESSION_CREATE);
  });

  it('has session_create as its type', () => {
    const action = refreshSession();
    
    expect(action.type).toEqual(SESSION_CREATE);
  });

  it('has session_token as its type', () => {
    const action = updateSessionToken();
    
    expect(action.type).toEqual(SESSION_TOKEN);
  });
});