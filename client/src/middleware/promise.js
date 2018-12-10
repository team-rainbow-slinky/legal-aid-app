const isPromise = payload => {
  return typeof payload === 'object' &&
    typeof payload.then === 'function';
};

export const LOAD_START = 'LOAD_START';
export const LOAD_END = 'LOAD_END';
export const PROMISE_ERROR = 'PROMISE_ERROR';

export default store => next => action => {
  const { dispatch } = store;
  const {
    type,
    payload,
    loadStart = LOAD_START,
    loadEnd = LOAD_END,
    errorType = PROMISE_ERROR
  } = action;

  if(!isPromise(payload)) return next(action);

  dispatch({ type: loadStart });

  return payload
    .then(result => {
      next({ type, payload: result });
      dispatch({ type: loadEnd });
    })
    .catch(err => {
      dispatch({ type: loadEnd });
      dispatch({ type: errorType, payload: err });
    });
};
