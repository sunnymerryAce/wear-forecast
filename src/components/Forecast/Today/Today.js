import React, { Component } from 'react';
import PropTypes from 'prop-types';

import image from '../../../images/2/2-02.jpg'; // Tell Webpack this JS file uses this image

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
        <p>今日の天気:{this.state.today.summary}</p>
        <p>今日の最高気温:{this.state.today.apparentTemperatureHigh}</p>
        <p>今日の最低気温:{this.state.today.apparentTemperatureLow}</p>
        <img src={image} alt="image" />
      </div>
    );
  }
}

Component.propTypes = {
  // weather: PropTypes.object,
};
