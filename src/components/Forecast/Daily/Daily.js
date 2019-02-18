import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        {this.state.daily.map((item, index) => {
          return (
            <div key={index}>
              time: {this.getHour(item.time)} {item.summary}
            </div>
          );
        })}
      </div>
    );
  }

  getHour(time) {
    console.log();

    const date = new Date(time * 1000);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  }
}

Component.propTypes = {
  // weather: PropTypes.object,
};
