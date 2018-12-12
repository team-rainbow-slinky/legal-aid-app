import { combineReducers } from 'redux';
import bookings from './bookings';
import session from './session';
import stateRecords from './stateRecords';

export default combineReducers({
  bookings,
  session,
  stateRecords
});
