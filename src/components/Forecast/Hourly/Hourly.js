import React, { Component } from 'react';
import classnames from 'classnames';

import PropTypes from 'prop-types';
import './Hourly.scss';

export default class Hourly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hourly: props.hourly.slice(0, 24),
    };
  }

  render() {
    return (
      <div className="Hourly">
        <div className="hourly__wrapper">
          {this.state.hourly.map((item, index) => {
            return (
              <div key={index} className="hourly__info">
                {this.getHour(item.time)}
                <div className="hourly__info__icon">
                  <figure className={classnames('icon', `${item.icon}`)} />
                </div>
                {Math.round(item.apparentTemperature)}℃
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  getHour(time) {
    const date = new Date(time * 1000);
    return `${date.getHours()}時`;
  }
}

Component.propTypes = {
  // weather: PropTypes.object,
};
