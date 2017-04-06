import React, { Component } from 'react';
import Navbar from './Navbar';

export default class App extends Component {
  render() {
    const styles = {
      display: 'flex',
      flexFlow: 'column'
    }
    return (
      <div className={styles}>
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}
