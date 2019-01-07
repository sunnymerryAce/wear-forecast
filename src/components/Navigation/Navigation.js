import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { item: props.item };
  }

  render() {
    return (
      <div className="Navigation">
        <p className="Navigation-Text">{this.state.item}</p>
        <button
          className="Navigation-Delete"
          onClick={this.props.deleteItem}
          style={
            !this.props.styleTest ? { display: 'block' } : { display: 'none' }
          }
        >
          -
        </button>
      </div>
    );
  }
}

export default Navigation;
