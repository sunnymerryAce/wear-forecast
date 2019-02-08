import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: props.weatherReducer.weather,
    };
  }
  // 引数の明示
  static propTypes = {
    // todo: PropTypes.object.isRequired,
    // editTodo: PropTypes.func.isRequired,
    // deleteTodo: PropTypes.func.isRequired,
    // completeTodo: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className="Forecast">
        <p>propsからの値：{this.props.weatherReducer.weather.latitude}</p>
        <p>this.stateからの値：{this.state.weather.latitude}</p>
        <div>
          {this.props.weatherReducer.isFetching ? (
            <p>trueの場合</p>
          ) : (
            <p>falseの場合</p>
          )}
        </div>
      </div>
    );
  }
}
