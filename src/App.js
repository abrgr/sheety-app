import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Router from './lib/router';
import store from './lib/store';
import './App.css';
import 'whatwg-fetch';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
