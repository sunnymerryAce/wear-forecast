import CONST from '../../helper/CONST';

/**
 * 天気情報のReducer
 * @param {object} state
 * @param {object} action
 * @return {object} new state
 */
const weather = (state = {}, action) => {
  switch (action.type) {
    case CONST.ACTION_TYPE.FETCH_GET_REQUEST:
      return Object.assign({}, state, { isFetching: true });
    case CONST.ACTION_TYPE.FETCH_GET_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        forecast: action.json,
      });
    default:
      return state;
  }
};

export default weather;
