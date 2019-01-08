import reducer from './bookings';
import {
  BOOKING_EDIT,
  FETCH_BOOKINGS,
  FETCH_BOOKING,
  BOOKING_LOADING,
  BOOKING_LOADED,
  BOOKING_ERROR,
  BOOKING_DELETE
} from '../actions/bookings';
import { seedBookings } from '../services/fixtures/seedBookings';

jest.mock('../services/bookingsApi.js');


describe('bookings reducer', () => {
  const state =  {
    list: seedBookings,
    detail: null
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

  it('handles a FETCH_BOOKING action', () => {
    const newState = reducer(state, {
      type: FETCH_BOOKING,
      payload: { hi: 'hi' }
    });
    expect(newState).toEqual({ ...state, detail: { hi: 'hi' } });
  });

  it('handles a BOOKING_DELETE action', () => {
    const newState  = reducer(state, {
      type: BOOKING_DELETE,
      payload: { hi: 'hi' }
    })
  });

  it('handles a BOOKING_LOADING action', () => {
    const newState = reducer(state, { type: BOOKING_LOADING });
    expect(newState.loading).toEqual(true);
  });

  it('handles a BOOKING_LOADED action', () => {
    const newState = reducer(state, { type: BOOKING_LOADED });
    expect(newState.loading).toEqual(false);
  });

  it('handles a BOOKING_ERROR action', () => {
    const newState = reducer(state, { type: BOOKING_ERROR, payload: 'error' });
    expect(newState.error).toEqual('error');
  });

});
