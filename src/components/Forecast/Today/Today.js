import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './Today.scss';
import { randomIntegerInRange, isInRange } from '../../../helper/util';

export default class Today extends Component {
  constructor(props) {
    super(props);
    this.state = {
      today: props.today,
      temperatureLevel: this.temperatureLevel(props.average),
      imageIndex: randomIntegerInRange({ min: 1, max: 5 }),
    };
  }

  temperatureLevel(number) {
    let level = null;
    if (isInRange({ number, last: 6 })) {
      level = 1;
    }
    if (isInRange({ number, first: 7, last: 11 })) {
      level = 2;
    }
    if (isInRange({ number, first: 12, last: 15 })) {
      level = 3;
    }
    if (isInRange({ number, first: 16, last: 20 })) {
      level = 4;
    }
    if (isInRange({ number, first: 21, last: 25 })) {
      level = 5;
    }
    if (isInRange({ number, first: 26, last: 30 })) {
      level = 6;
    }
    if (isInRange({ number, first: 31, last: 35 })) {
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
        <figure className={classnames('icon', `${this.state.today.icon}`)} />
        <p>コメント:{this.state.today.summary}</p>
        <p>最高気温:{this.state.today.apparentTemperatureHigh}</p>
        <p>最低気温:{this.state.today.apparentTemperatureLow}</p>
        <figure
          className={classnames(
            'wearing-image',
            `wearing-image--${this.state.temperatureLevel}-0${
              this.state.imageIndex
            }`
          )}
        />
      </div>
    );
  }
}

Component.propTypes = {
  // weather: PropTypes.object,
};
