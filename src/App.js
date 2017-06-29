import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function logException(ex, context) {
  window.Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window.console && console.error && console.error(ex);
}


class App extends Component {
  test() {
    logException(new Error('Hello Sentry 3!'), this);
  }

  render() {
    this.test();

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
