import React from 'react';
import { Map } from 'immutable';
import presenter from '../presenter';

const BackgroundPresenter = ({ config, renderPresenter }) => {
  const presenter = config.get('presenter');
  const style = config.remove('presenter').toJS();

  return (
    <div style={style}>
      {presenter ? renderPresenter(presenter) : null}
    </div>
  );
};

export default presenter({
  configKeyDocs: new Map({
    backgroundColor: 'String background color suitable for css backgroundColor property',
    color: 'String color suitable for css color property',
    borderRadius: 'Border radius suitable for css border radius',
    width: 'Width of the cell',
    height: 'Height of the cell',
    minWidth: 'Minimum width of the cell',
    maxWidth: 'Maximum width of the cell',
    minHeight: 'Minimum height of the cell',
    maxHeight: 'Maximum height of the cell',
    textAlign: 'Text alignment of the cell',
    presenter: 'Inner presenter definition'
  })
})(BackgroundPresenter);
