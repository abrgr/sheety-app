import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Router from './lib/router';
import store from './lib/store';
import 'whatwg-fetch';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'firebaseui/dist/firebaseui.css';
import 'react-quill/dist/quill.snow.css';

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
