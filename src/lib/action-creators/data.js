import {
  RECEIVED_APP_MODEL,
  SET_CELL_VALUES,
  SET_ASYNC_CELL_VALUE
} from '../actions';

export function load() {
  const info = JSON.parse(document.getElementById('app').innerHTML);
  return {
    type: RECEIVED_APP_MODEL, 
    model: info.model,
    presenter: info.presenter
  };
}

export function setCellValues(valuesByCellRef) {
  return {
    type: SET_CELL_VALUES,
    valuesByCellRef
  };
}

export function setAsyncCellValue(cellRef, value) {
  return {
    type: SET_ASYNC_CELL_VALUE,
    cellRef,
    value
  }
}
