import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './Today.scss';
import { randomIntegerInRange, isInRange } from '../../../helper/util';

export default class Today extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: props.current,
      today: props.today,
      temperatureLevel: this.temperatureLevel(props.average),
      imageIndex: randomIntegerInRange({ min: 1, max: 5 }),
    };
  }

  temperatureLevel(number) {
    let level = null;
    if (isInRange({ number, last: 7 })) {
      level = 1;
    }
    if (isInRange({ number, first: 7, last: 12 })) {
      level = 2;
    }
    if (isInRange({ number, first: 12, last: 16 })) {
      level = 3;
    }
    if (isInRange({ number, first: 16, last: 21 })) {
      level = 4;
    }
    if (isInRange({ number, first: 21, last: 26 })) {
      level = 5;
    }
    if (isInRange({ number, first: 26, last: 31 })) {
      level = 6;
    }
    if (isInRange({ number, first: 31, last: 36 })) {
      level = 7;
    }
    if (isInRange({ number, first: 36 })) {
      level = 8;
    }
    return level;
  }

  render() {
    return (
      <div className="Today">
        <div className="today__wrapper">
          <div className="today__info">
            <div className="today__info__icon">
              <figure
                className={classnames('icon', `${this.state.current.icon}`)}
              />
            </div>
            <div className="today__info__temperature">
              <div className="today__info__temperature--high">
                <span className="today__info__temperature--number">
                  {Math.round(this.state.today.apparentTemperatureHigh)}
                </span>
                ℃
              </div>
              <div className="today__info__temperature--low">
                <span className="today__info__temperature--number">
                  {Math.round(this.state.today.apparentTemperatureLow)}
                </span>
                ℃
              </div>
            </div>
            <p className="comment">{this.state.current.summary}</p>
          </div>
          <div className="today__image">
            <figure
              className={classnames(
                'wearing-image',
                `wearing-image--${this.state.temperatureLevel}-0${
                  this.state.imageIndex
                }`
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  // weather: PropTypes.object,
};
