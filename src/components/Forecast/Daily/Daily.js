import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import './Daily.scss';

export default class Daily extends Component {
  constructor(props) {
    super(props);
    this.state = {
      daily: props.daily,
    };
  }

  render() {
    return (
      <div className="Daily">
        <div className="daily__wrapper">
          {this.state.daily.map((item, index) => {
            return (
              <div key={index} className="daily__info">
                {this.getDate(item.time)}
                <div className="daily__info__icon">
                  <figure className={classnames('icon', `${item.icon}`)} />
                </div>
                {item.summary}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  getDate(time) {
    const date = new Date(time * 1000);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  }
}

Component.propTypes = {
  // weather: PropTypes.object,
};
