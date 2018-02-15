import React from 'react';
import { Map } from 'immutable';
import 'bootstrap/dist/css/bootstrap.min.css';
import presenter from '../presenter';

const GridPresenter = ({ config, renderPresenter }) => {
  const rows = config.get('rows');

  return (
    <div className="container">
      {rows.map((row, rowIdx) => (
        <div
          key={`row-${rowIdx}`}
          className="row">
          {row.map((cell, cellIdx) => (
            <div
              key={`cell-${cellIdx}`}
              className={`col-${cell.get('width')}`}>
              {cell.has('presenter') ? renderPresenter(cell.get('presenter')) : null}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default presenter({
  configKeyDocs: new Map({
    rows: 'rows is an iterable of row iterables.  Each row iterable is composed of cell descriptors.  Each cell descriptor is an object/map like { width, presenter }, where width is a value from 1-12 and presenter is a presenter definition.'
  })
})(GridPresenter);
