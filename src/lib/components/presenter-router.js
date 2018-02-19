import React from 'react';
import {
  Sheet,
  GridLayout,
  Background,
  Text,
  Link,
  Router,
  RequireAuth,
  Content
} from '../presenters';

const presenterComponents = {
  table: Sheet,
  grid: GridLayout,
  background: Background,
  text: Text,
  link: Link,
  router: Router,
  "require-auth": RequireAuth,
  content: Content
};

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
