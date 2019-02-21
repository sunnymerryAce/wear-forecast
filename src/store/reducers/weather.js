import { FETCH_GET_REQUEST, FETCH_GET_SUCCESS } from '../CONSTs/ActionTypes';

/**
 * 天気情報のReducer
 * @param {object} state
 * @param {object} action
 * @return {object} new state
 */
const weather = (state = {}, action) => {
  switch (action.type) {
    case FETCH_GET_REQUEST:
      return Object.assign({}, state, { isFetching: true });
    case FETCH_GET_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        forecast: action.json,
      });
    default:
      return state;
  }
};

export default weather;
