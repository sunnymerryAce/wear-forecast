import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Today extends Component {
  constructor(props) {
    super(props);
    this.state = {
      today: props.today,
    };
  }

  render() {
    return (
      <div className="Today">
        <p>今日の天気:{this.state.today.icon}</p>
        <p>今日の最高気温:{this.state.today.apparentTemperatureHigh}</p>
        <p>今日の最低気温:{this.state.today.apparentTemperatureLow}</p>
      </div>
    );
  }
}

Component.propTypes = {
  // weather: PropTypes.object,
};
