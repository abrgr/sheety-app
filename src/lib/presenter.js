import React, { cloneElement, Children } from 'react';
import { connect } from 'react-redux';

/**
 * Decorator used to wire up a Presenter.
 * Renders the decorated component with the following props:
 *  - arrayData - array of data that matches the arrayDataQuery provided to the presenter
 *  - mapData - map of data that matches the mapDataQuery provided to the presenter
 *  - config - config provided to the presenter
 *
 * And accepts the following props:
 *  - values - values from Calculator
 *  - sheet - Sheet
 *  - config - config parameter
 **/
export default function presenter({ configKeyDocs, mapDataDocs, arrayDataDocs }) {
  return (Component) => (
    () => (
      <PresenterContainer
        configKeyDocs={configKeyDocs}
        mapDataDocs={mapDataDocs}
        arrayDataDocs={arrayDataDocs}>
        <Component />
      </PresenterContainer>
    )
  );
}

const PresenterContainer_ = (props) => {
  const mapData = getMapData(props.data, props.mapDataQuery);
  const arrayData = getArrayData(props.data, props.arrayDataQuery);

  return cloneElement(
    Children.only(props.children),
    {
      config: preserveKeys(props.config, props.configKeyDocs),
      mapData: preserveKeys(mapData, props.mapDataDocs),
      arrayData,
      sheet: props.sheet
    }
  )
};

const PresenterContainer = connect(
  ({ data }) => ({
    data: data.get('calculatedValues'),
    sheet: data.get('sheet')
  })
)(PresenterContainer_);

function preserveKeys(map, keySpec) {
  return map; // TODO
}

function getArrayData(data, query) {
  // TODO: get the actual data from the calculator
  const matrix = data.get('Valuator - Top-Down').toJS();
  const maxCols = matrix.reduce((max, row) => (
    !!row ? Math.max(max, row.length) : max
  ), 0);
  return matrix.map(row => {
    const r = row || [];
    return r.concat(getSpacer(maxCols - r.length))
  });
}

function getSpacer(len) {
  const spacer = [];
  for ( let i = 0; i < len; ++i ) {
    spacer.push('');
  }
  return spacer;
}

function getMapData(data, query) {
  return data;
}
