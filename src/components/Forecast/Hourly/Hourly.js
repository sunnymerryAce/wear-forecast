import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Hourly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hourly: props.hourly,
    };
  }

  render() {
    return (
      <div className="Hourly">
        {this.state.hourly.map((item, index) => {
          return (
            <div key={index}>
              time: {this.getHour(item.time)}、{item.apparentTemperature}
            </div>
          );
        })}
      </div>
    );
  }

  getHour(time) {
    console.log();

    const date = new Date(time * 1000);
    return `${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}時`;
  }
}

Component.propTypes = {
  // weather: PropTypes.object,
};
