import {
  BOOKING_EDIT,
  FETCH_BOOKINGS,
  FETCH_BOOKING,
  BOOKING_LOADING,
  BOOKING_LOADED,
  BOOKING_ERROR
} from '../actions/bookings';

const initialState = {
  list: {},
  detail: null,
  loading: false,
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case BOOKING_LOADING:
      return { ...state, loading: true };
    case BOOKING_LOADED:
      return { ...state, loading: false };
    case BOOKING_ERROR:
      return { ...state, error: payload };
    case FETCH_BOOKINGS:
      return { ...state, list: payload };
    case FETCH_BOOKING:
      return { ...state, detail: payload };
    case BOOKING_EDIT:
      return { ...state, list: { ...state.list, [payload._id]: payload } };
    default: return state;
  }
}
