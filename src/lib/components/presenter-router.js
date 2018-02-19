import React from 'react';
import makeCorePresenters from 'sheety-core-presenters/dist/app';
import firebasePromise from '../firebase';
import { ensureHaveAuthState } from '../ensure-authenticated';
import presenter from '../presenter';

const presenterComponents = {};
makeCorePresenters(
  presenter,
  {
    presenterRegistry: (type, component) => {
      presenterComponents[type] = component;
    },
    firebasePromise: Promise.all([
      ensureHaveAuthState,
      firebasePromise
    ]).then(([_, firebase]) => firebase)
  }
);

export default ({ presenter }) => {
  const presenterId = presenter.get('type');
  const PresenterComponent = presenterComponents[presenterId];

  if ( PresenterComponent ) {
    return (
      <PresenterComponent
        arrayDataQuery={presenter.get('arrayDataQuery')}
        mapDataQuery={presenter.get('mapDataQuery')}
        config={presenter.get('config')} /> 
    );
  }

  return (
    <p>
      Bad presenter: {presenterId}
    </p>
  );
};
