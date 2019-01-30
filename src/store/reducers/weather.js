import { SET_WEATHER } from '../constants/ActionTypes';

/**
 * 天気情報のReducer
 * @param {object} state
 * @param {object} action
 * @return {object} new state
 */
const weather = (state = {}, action) => {
  switch (action.type) {
    case SET_WEATHER:
      return Object.assign({}, state, { weather: action.weather });
    default:
      return state;
  }
};

export default weather;
