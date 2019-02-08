import { connect } from 'react-redux';
import { setWeather } from '../actions';
import Forecast from '../../components/Forecast/Forecast';

const mapStateToProps = (state) => {
  return {
    weatherReducer: state.weatherReducer,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  setWeather: () => {
    dispatch(setWeather(ownProps.weather));
  },
  // actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Forecast);
