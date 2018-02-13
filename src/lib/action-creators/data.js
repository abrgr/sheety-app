import {
  REQUESTED_SHEET,
  RECEIVED_SHEET,
  SHEET_FAILED,
  SET_CELL_VALUES,
  SET_ASYNC_CELL_VALUE
} from '../actions';

export function load(url) {
  return (dispatch) => {
    dispatch({ type: REQUESTED_SHEET });
    fetch(url).then((blob) => (
      blob.json()
    )).then((info) => {
      dispatch({
        type: RECEIVED_SHEET, 
        sheet: info.sheet,
        presenter: info.presenter
      });
    }).catch((err) => {
      dispatch({ type: SHEET_FAILED, err });
    });
  };
}

export function setCellValues(sheet, valuesByCellRef) {
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
