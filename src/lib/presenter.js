import React, { cloneElement, Children } from 'react';
import { connect } from 'react-redux';
import { CellRefRange } from 'sheety-model';
import { dataActions } from './action-creators';

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
    (props) => (
      <PresenterContainer
        {...props}
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
  const arrayData = getArrayData(props.calc, props.arrayDataQuery, props.arrayDataDocs);
  const arrayCells = getArrayCells(props.calc, props.arrayDataQuery, props.arrayDataDocs);

  return cloneElement(
    Children.only(props.children),
    {
      config: preserveKeys(props.config, props.configKeyDocs),
      mapData: preserveKeys(mapData, props.mapDataDocs),
      arrayData,
      arrayCells,
      arrayDataQuery: props.arrayDataQuery,
      mapDataQuery: props.mapDataQuery,
      sheet: props.sheet,
      setCellValues: setCellValues.bind(null, props.dispatch)
    }
  )
};

const PresenterContainer = connect(
  ({ data }) => ({
    data: data.get('calculatedValues'),
    sheet: data.get('sheet'),
    calc: data.get('calc')
  })
)(PresenterContainer_);

function preserveKeys(map, keySpec) {
  return map && keySpec && map.filter(k => keySpec.has(k));
}

function getArrayData(calc, query, docs) {
  if ( !docs ) {
    return null; // TODO: logging?
  }

  const matrix = calc.getRange(CellRefRange.fromA1Ref(query));
  const maxCols = matrix.reduce((max, row) => (
    !!row ? Math.max(max, row.length) : max
  ), 0);
  return matrix.map(row => {
    const r = row || [];
    return r.concat(getSpacer(maxCols - r.length))
  });
}

function getArrayCells(calc, query, docs) {
  if ( !docs ) {
    return null;
  }

  const rangeRef = CellRefRange.fromA1Ref(query);
  const sheet = calc.sheet;
  return sheet.mapRange(
    rangeRef,
    sheet.getCell.bind(sheet)
  );
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

function setCellValues(dispatch, valuesByCellRef) {
  dispatch(dataActions.setCellValues(valuesByCellRef));
}
