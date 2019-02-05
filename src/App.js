import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import Login from './pages/login/Login';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Loading from './components/Loading/Loading';
import Forecast from './store/containers/Forecast';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>React</p>
        </header>
        <Forecast />
        {this.state.isLoading && <Loading />}
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
            <Route exact path="/login" component={Login} />
          </div>
        </Router>
        <Navigation item="item" />
      </div>
    );
  }
}
