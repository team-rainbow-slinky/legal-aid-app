import { getSession, getSessionLoading, getSessionError, getSessionToken } from './session';

const state = {
  session: {
    token: '',
    user: { email: 'user@user.com' },
    loading: true,
    error: null
  }
};

describe('session selectors', () => {
  it('returns a session', () => {
    const session = getSession(state);

    expect(session).toEqual({ email: 'user@user.com' });
  });

  it('returns the loading state of a session', () => {
    const session = getSessionLoading(state);

    expect(session).toEqual(true);
  });

  it('returns the error state of a session', () => {
    const session = getSessionError(state);

    expect(session).toEqual(null);
  });

  it('returns the token state of a session', () => {
    const session = getSessionToken(state);

    expect(session).toEqual('');
  });
});
