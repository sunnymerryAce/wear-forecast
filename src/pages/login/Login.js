import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { isLogin: props.isLogin };
  }

  render() {
    if (this.state.isLogin) {
      return (
        <div className="login">
          <div className="login__loading" />
          <div className="login__content">
            <button className="login-button">Googleアカウントでログイン</button>
          </div>
        </div>
      );
    }
  }
}
