import reducer from './bookings';
import { BOOKING_EDIT, FETCH_BOOKINGS } from '../actions/bookings';
import seedBookings from '../services/fixtures/seedBookings';

describe('bookings reducer', () => {
  const state = {
    bookings: {
      list: seedBookings
    }
  };

  it('returns initial state', () => {
    const newState = reducer(state, {});
    expect(newState).toEqual(state);
  });

  it('handles a FETCH_BOOKINGS action', () => {
    const newState = reducer(state, {
      type: FETCH_BOOKINGS,
      payload: [{ hi: 'hi' }]
    });
    
    expect(newState).toEqual({ ...state, list: [{ hi: 'hi' }] });
  });

  it('handles a BOOKING_EDIT action', () => {

  });
});
