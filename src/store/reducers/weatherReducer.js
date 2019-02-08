import { FETCH_GET_REQUEST, FETCH_GET_SUCCESS } from '../constants/ActionTypes';

/**
 * 天気情報のReducer
 * @param {object} state
 * @param {object} action
 * @return {object} new state
 */
const weatherReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_GET_REQUEST:
      return Object.assign({}, state, { isFetching: true });
    case FETCH_GET_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        weather: action.json,
      });
    default:
      return state;
  }
};

export default weatherReducer;
