import * as types from '../constants/ActionTypes';

export const setWeather = (weather) => ({
  type: types.SET_WEATHER,
  weather,
});

export const fetchGetRequest = () => ({ type: types.FETCH_GET_REQUEST });
export const fetchGetFailure = () => ({
  type: types.FETCH_GET_FAILURE,
  error: 'Oops',
});
export const fetchGetSuccess = (json) => ({
  type: types.FETCH_GET_SUCCESS,
  json,
});

export const fetchGet = () => {
  return function(dispatch) {
    dispatch(fetchGetRequest);
    let latitude = '35.681236';
    let longitude = '139.767125';

    // 位置情報取得
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        const url =
          'https://us-central1-expense-book-react.cloudfunctions.net/getForecast';
        return fetch(`${url}?latitude=${latitude}&longitude=${longitude}`)
          .then(
            (response) => response.json(),
            (error) => console.log('An error occurred.', error)
          )
          .then((json) => {
            dispatch(fetchGetSuccess(json));
          });
      });
    }
  };
};
