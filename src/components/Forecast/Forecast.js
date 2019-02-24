import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Today from './Today/Today';
import Hourly from './Hourly/Hourly';
import Daily from './Daily/Daily';
import _ from 'lodash';
import { Popover, NavBar, Icon, Tabs, Range, Switch, List } from 'antd-mobile';

const Item = Popover.Item;

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
            <Popover
              mask
              overlayClassName="fortest"
              overlayStyle={{ color: 'currentColor' }}
              visible={this.state.visible}
              overlay={[
                <Item key="4" value="scan" data-seed="logId">
                  暑がり度
                  <Range
                    style={{ marginLeft: 30, marginRight: 30, width: '80vw' }}
                    min={0}
                    max={20}
                    defaultValue={[3, 10]}
                  />
                </Item>,
                <Item key="5" value="special" style={{ whiteSpace: 'nowrap' }}>
                  性別
                  <List>
                    <List.Item
                      extra={
                        <Switch
                          checked={this.state.checked}
                          onChange={() => {
                            this.setState({
                              checked: !this.state.checked,
                            });
                          }}
                        />
                      }
                    />
                  </List>
                </Item>,
              ]}
              align={{
                overflow: { adjustY: 0, adjustX: 0 },
                offset: [-10, 0],
              }}
              onVisibleChange={this.handleVisibleChange}
              onSelect={this.onSelect}
            >
              <div
                style={{
                  height: '100%',
                  padding: '0 15px',
                  marginRight: '-15px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Icon type="ellipsis" />
              </div>
            </Popover>
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
