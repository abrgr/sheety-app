import React from 'react';
import { Map } from 'immutable';
import presenter from '../presenter';

const TextPresenter = ({ mapData }) => {
  const text = mapData.get('text');

  return (
    <p>
      {text}
    </p>
  );
};

export default presenter({
  configKeyDocs: new Map({
  }),
  mapDataDocs: new Map({
    text: 'Text to render'
  })
})(TextPresenter);
