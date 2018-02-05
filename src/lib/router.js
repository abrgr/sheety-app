import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Presenter from './containers/presenter';

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            component={Presenter} />
        </Switch>
      </BrowserRouter>
    );
  }
}
