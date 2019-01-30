import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      today: '',
      weather: props.weather,
      setWeather: props.setWeather,
    };

    // Cloud Functionsテスト
    const url =
      'https://us-central1-expense-book-react.cloudfunctions.net/getForecast';
    const latitude = '35.681236';
    const longitude = '139.767125';

    fetch(`${url}?latitude=${latitude}&longitude=${longitude}`)
      .then((response) => {
        // responseからJSONを抽出
        return response.json();
      })
      .then((json) => {
        this.state.setWeather(json);
        console.log(this.state.weather);

        this.setState({
          today: new Date(this.state.weather.hourly.data[0].time * 1000),
        });
      });
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
        <p>現在の体感気温：{this.state.today}</p>
      </div>
    );
  }
}
