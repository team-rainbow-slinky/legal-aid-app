import {
  SESSION_CREATE,
  SESSION_LOADING,
  SESSION_LOADED,
  SESSION_ERROR,
  SESSION_TOKEN,
  SESSION_END,
  FETCH_ORG
} from '../actions/session';

const initialState = {
  token: '',
  user: null,
  org: null,
  loading: false,
  error: null
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case SESSION_CREATE:
      return { ...state, user: payload };
    case SESSION_LOADING:
      return { ...state, loading: true };
    case SESSION_LOADED:
      return { ...state, loading: false };
    case SESSION_ERROR:
      return { ...state, user: null, error: payload };
    case SESSION_TOKEN:
      return { ...state, token: payload };
    case SESSION_END:
      window.localStorage.removeItem('token');
      return { ...initialState };
    case FETCH_ORG:
      return { ...state, org: payload };
    default:
      return state;
  }
}
