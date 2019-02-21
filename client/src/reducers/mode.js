import {
  FETCH_MODE
} from '../actions/mode';

const initialState = null;

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_MODE:
      return payload;
    default:
      return state;
  }
}

