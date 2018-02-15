import React from 'react';
import { Map } from 'immutable';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import presenter from '../presenter';

const RouterPresenter = ({ config, renderPresenter }) => {
  const routes = config.get('routes');

  return (
    <BrowserRouter>
      <Switch>
        {routes.map((presenter, route) => (
          <Route
            key={route}
            exact
            path={route}
            render={renderPresenter.bind(null, presenter)} />
        )).valueSeq()}
      </Switch>
    </BrowserRouter>
  );
};

export default presenter({
  configKeyDocs: new Map({
    routes: 'Map from url to presenter to show at that url'
  })
})(RouterPresenter);
