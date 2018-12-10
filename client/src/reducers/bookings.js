import { BOOKING_EDIT, FETCH_BOOKINGS } from '../actions/bookings';

const initialState = {
  bookings: {
    list: []
  }
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_BOOKINGS:
      return { ...state, list: payload };
    case BOOKING_EDIT:
      return { ...state, list: { ...state.list, payload }}
    default: return state;
  }
}
