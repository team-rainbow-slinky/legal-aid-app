import {
  getBookings,
  getBooking,
  updateBooking,
  removeBooking
} from '../services/bookingsApi';


export const BOOKING_LOADING = 'BOOKING_LOADING';
export const BOOKING_LOADED = 'BOOKING_LOADED';
export const BOOKING_ERROR = 'BOOKING_ERROR';

export const FETCH_BOOKINGS = 'FETCH_BOOKINGS';
export const fetchBookings = () => ({
  type: FETCH_BOOKINGS,
  loadStart: BOOKING_LOADING,
  loadEnd: BOOKING_LOADED,
  payload: getBookings()
});

export const FETCH_BOOKING = 'FETCH_BOOKING';
export const fetchBooking = id => ({
  type: FETCH_BOOKING,
  loadStart: BOOKING_LOADING,
  loadEnd: BOOKING_LOADED,
  payload: getBooking(id)
});

export const BOOKING_EDIT = 'BOOKING_EDIT';
export const editBooking = booking => ({
  type: BOOKING_EDIT,
  payload: updateBooking(booking)
});

export const BOOKING_DELETE = 'BOOKING_DELETE';
export const deleteBooking = booking => ({
  type: BOOKING_DELETE,
  payload: removeBooking(booking)
});
