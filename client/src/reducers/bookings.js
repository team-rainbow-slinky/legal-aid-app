import { BOOKING_EDIT, FETCH_BOOKINGS, FETCH_BOOKING } from '../actions/bookings';

const initialState = {
  list: [],
  detail: null
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_BOOKINGS:
      return { ...state, list: payload };
    case FETCH_BOOKING:
      return { ...state, detail: payload };
    case BOOKING_EDIT:
      return { ...state, list: { ...state.list, payload } };
    default: return state;
  }
}
