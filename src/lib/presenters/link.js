import React from 'react';
import { Map } from 'immutable';
import presenter from '../presenter';

const LinkPresenter = ({ config, mapData, renderPresenter }) => {
  const presenter = config.get('presenter');
  const url = mapData.get('url');

  return (
    <a href={url}>
      {presenter ? renderPresenter(presenter) : null}
    </a>
  );
};

export default presenter({
  configKeyDocs: new Map({
    presenter: 'Inner presenter definition'
  }),
  mapDataDocs: new Map({
    url: 'URL to link to'
  })
})(LinkPresenter);
