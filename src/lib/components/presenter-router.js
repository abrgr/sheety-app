import React from 'react';
import {
  Sheet,
  GridLayout,
  Background,
  Text,
  Link,
  Router
} from '../presenters';

const presenterComponents = {
  table: Sheet,
  grid: GridLayout,
  background: Background,
  text: Text,
  link: Link,
  router: Router
};

export default ({ presenter }) => {
  const presenterId = presenter.get('id');
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
