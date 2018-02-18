import React from 'react';
import { Map } from 'immutable';
import sanitizer from '../sanitizer';
import presenter from '../presenter';

const ContentPresenter = ({ config }) => {
  const content = config.get('content');
  const sanitizedContent = sanitizer.sanitize(content, uriRewriter);

  return (
    <div dangerouslySetInnerHTML={{__html: sanitizedContent}} />
  );
};

function uriRewriter(uri) {
  return uri; // TODO: apply some whitelisting, etc.
}

export default presenter({
  configKeyDocs: new Map({
    content: 'HTML to render (will be sanitized)'
  })
})(ContentPresenter);
