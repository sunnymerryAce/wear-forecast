import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Today from './Today/Today';
import Hourly from './Hourly/Hourly';
import Daily from './Daily/Daily';
import Setting from './Setting/Setting';
import _ from 'lodash';
import {NavBar, Icon, Tabs, Range, Switch, List } from 'antd-mobile';

const tabs = [
  { title: '1時間ごと', sub: '1' },
  { title: '週間天気', sub: '2' },
];

export default class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecast: props.weather.forecast,
    };
  }

  // 12時間内の平均気温
  averageTemperature() {
    return _.chain(this.props.weather.forecast.hourly.data)
      .map('apparentTemperature')
      .slice(0, 12)
      .mean()
      .value();
  }

  render() {
    return (
      <div className="Forecast">
        <NavBar
          mode="dark"
          rightContent={
            <Setting></Setting>
          }
        >
          Wear Forecast
        </NavBar>
        <Today
          current={this.props.weather.forecast.currently}
          today={this.props.weather.forecast.daily.data[0]}
          average={this.averageTemperature()}
        />
        <Tabs
          tabs={tabs}
          initialPage={0}
          swipeable={false}
          onChange={(tab, index) => {
            console.log('onChange', index, tab);
          }}
          onTabClick={(tab, index) => {
            console.log('onTabClick', index, tab);
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '35vh',
              backgroundColor: '#fff',
            }}
          >
            <Hourly hourly={this.props.weather.forecast.hourly.data} />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '35vh',
              backgroundColor: '#fff',
            }}
          >
            <Daily daily={this.props.weather.forecast.daily.data} />
          </div>
        </Tabs>
      </div>
    );
  }
}

Component.propTypes = {
  weather: PropTypes.object,
};
