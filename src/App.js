import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Loading from './components/Loading/Loading';
import Forecast from './components/Forecast/ForecastContainer';
import PropTypes from 'prop-types';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        {!this.props.isFetching && <Forecast />}
        {this.props.isFetching && <Loading />}
        <Router>
          <div>
            {/* <Link to="/login">Login</Link> */}
            {/* <Route exact path="/login" component={Login} /> */}
          </div>
        </Router>
      </div>
    );
  }
}

App.propTypes = {
  isFetching: PropTypes.boolean,
};
