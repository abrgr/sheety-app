import React from 'react';
import { Map } from 'immutable';
import presenter from '../presenter';

const TextPresenter = ({ config }) => {
  const text = config.get('text');

  return (
    <p>
      {text}
    </p>
  );
};

export default presenter({
  configKeyDocs: new Map({
    text: 'Text to render'
  })
})(TextPresenter);
