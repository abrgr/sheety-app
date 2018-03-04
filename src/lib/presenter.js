import React, { cloneElement, Children } from 'react';
import { Map } from 'immutable';
import { connect } from 'react-redux';
import { CellRefRange, Presenter as PresenterModel } from 'sheety-model';
import { dataActions } from './action-creators';
import { PresenterRouter } from './components';

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
export default function presenter(config) {
  const formatted = config && config.formatted;
  return (Component) => (
    (props) => (
      <PresenterContainer
        {...props}
        formatted={formatted}>
        <Component />
      </PresenterContainer>
    )
  );
}

const PresenterContainer_ = (props) => {
  const mapData = getMapData(props.calc, props.data, props.mapDataQuery);
  const arrayData = getArrayData(props.calc, props.arrayDataQuery, props.formatted);
  const arrayCells = getArrayCells(props.calc, props.arrayDataQuery);

  return cloneElement(
    Children.only(props.children),
    {
      config: props.config,
      mapData: mapData,
      arrayData,
      arrayCells,
      arrayDataQuery: props.arrayDataQuery,
      mapDataQuery: props.mapDataQuery,
      sheet: props.sheet,
      setCellValues: setCellValues.bind(null, props.dispatch, props.sheet),
      renderPresenter
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

function renderPresenter(presenter) {
  if ( !presenter ) {
    return null;
  }

  return (
    <PresenterRouter
      presenter={new PresenterModel(presenter)} />
  );
}

function getArrayData(calc, query, formatted) {
  if ( !query ) {
    return [[]]; // TODO: logging?
  }

  const a1Range = CellRefRange.fromA1Ref(query);
  const matrix = formatted
               ? calc.getFormattedRange(a1Range)
               : calc.getRange(a1Range);
  const maxCols = matrix.reduce((max, row) => (
    !!row ? Math.max(max, row.length) : max
  ), 0);
  return matrix.map(row => {
    const r = row || [];
    return r.concat(getSpacer(maxCols - r.length))
  });
}

function getArrayCells(calc, query) {
  if ( !calc || !query ) {
    return [[]];
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

function getMapData(calc, data, query) {
  if ( !query ) {
    return new Map();
  }

  return query.map(value => calc.evaluateFormula(value));
}

function setCellValues(dispatch, sheet, valuesByCellRef) {
  dispatch(dataActions.setCellValues(valuesByCellRef));
}
