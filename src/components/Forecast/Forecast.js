import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecast: props.weather.forecast,
    };
  }

  render() {
    return (
      <div className="Forecast">
        <p>propsからの値：現在の</p>
        <p>気温: {this.props.weather.forecast.currently.temperature}</p>
        <p>
          体感気温: {this.props.weather.forecast.currently.apparentTemperature}
        </p>
      </div>
    );
  }
}

Component.propTypes = {
  weather: PropTypes.object,
};
