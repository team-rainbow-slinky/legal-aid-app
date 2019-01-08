export const getSession = state => state.session.user;

export const getSessionLoading = state => state.session.loading;

export const getSessionError = state => state.session.error;

export const getSessionToken = state => state.session.token;

export const getOrgId = state => getSession(state).org;

export const getOrg = state => state.session.org;
