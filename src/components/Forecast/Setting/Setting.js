import React, { Component } from 'react';
import classnames from 'classnames';

import PropTypes from 'prop-types';
import { Modal, Icon } from 'antd-mobile';
import './Setting.scss';

export default class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  render() {
    return (
      <div className="Setting">
        <Icon key="1" type="ellipsis" />
        <Modal
          popup
          visible={this.state.isVisible}
          onClose={this.close}
          animationType="slide-up"
        />
      </div>
    );
  }

  close() {
    this.setState({ isVisible: false });
  }
}

Component.propTypes = {
  // weather: PropTypes.object,
};
