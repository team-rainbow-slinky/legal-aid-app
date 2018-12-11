import { combineReducers } from 'redux';
import bookings from './bookings';
import session from './session';

export default combineReducers({
  bookings,
  session
});
