import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Today from './Today/Today';
import Hourly from './Hourly/Hourly';
import Daily from './Daily/Daily';

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
        <Today today={this.props.weather.forecast.daily.data[0]} />
        <Hourly hourly={this.props.weather.forecast.hourly.data} />
        <Daily daily={this.props.weather.forecast.daily.data} />
      </div>
    );
  }
}

Component.propTypes = {
  weather: PropTypes.object,
};
