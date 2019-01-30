import { connect } from 'react-redux';
import { setWeather } from '../actions';
import Forecast from '../../components/Forecast/Forecast';

const mapStateToProps = (state) => ({
  weather: state.weather,
});

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
