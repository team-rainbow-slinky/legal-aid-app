import {
  FETCH_STATE_RECORDS,
  STATE_RECORDS_LOADING,
  STATE_RECORDS_LOADED,
  STATE_RECORDS_ERROR
} from '../actions/stateRecords';

const initialState = {
  list: [],
  detail: null,
  loading: false,
  searchComplete: false
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case STATE_RECORDS_LOADING:
      return { ...state, loading: true, searchComplete: false };
    case STATE_RECORDS_LOADED:
      return { ...state, loading: false, searchComplete: true };
    case STATE_RECORDS_ERROR:
      return { ...state, error: payload };
    case FETCH_STATE_RECORDS:
      return { ...state, list: payload };
    default: 
      return state;
  }
}

//add a selector for searchComplete and use that to conditionally show the results component
// in withList display total length of list
// conditionally remove the add button if list length of records to add is zero 