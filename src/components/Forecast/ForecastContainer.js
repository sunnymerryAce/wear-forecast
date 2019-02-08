import { connect } from 'react-redux';
import { setWeather } from '../../store/actions';
import Forecast from './Forecast';

const mapStateToProps = (state) => {
  return {
    weather: state.weather,
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
