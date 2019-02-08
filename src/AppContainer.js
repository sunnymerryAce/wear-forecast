import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = (state) => {
  return {
    isFetching: state.weather.isFetching,
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
