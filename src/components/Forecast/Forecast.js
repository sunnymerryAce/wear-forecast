import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Today from './Today/Today';
import Hourly from './Hourly/Hourly';
import Daily from './Daily/Daily';
import _ from 'lodash';

export default class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecast: props.weather.forecast,
    };
  }

  // 12時間内の平均気温
  averageTemperature() {
    return _.chain(this.props.weather.forecast.hourly.data)
      .map('apparentTemperature')
      .slice(0, 12)
      .mean()
      .value();
  }

  render() {
    return (
      <div className="Forecast">
        <Today
          today={this.props.weather.forecast.daily.data[0]}
          average={this.averageTemperature()}
        />
        <Hourly hourly={this.props.weather.forecast.hourly.data} />
        <Daily daily={this.props.weather.forecast.daily.data} />
      </div>
    );
  }
}

Component.propTypes = {
  weather: PropTypes.object,
};
