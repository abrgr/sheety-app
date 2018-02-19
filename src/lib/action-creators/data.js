import {
  REQUESTED_APP_MODEL,
  RECEIVED_APP_MODEL,
  APP_MODEL_FAILED,
  SET_CELL_VALUES,
  SET_ASYNC_CELL_VALUE
} from '../actions';

export function load(url) {
  return (dispatch) => {
    dispatch({ type: REQUESTED_APP_MODEL });
    fetch(url).then((blob) => (
      blob.json()
    )).then((info) => {
      dispatch({
        type: RECEIVED_APP_MODEL, 
        sheet: info.sheet,
        presenter: info.presenter
      });
    }).catch((err) => {
      dispatch({ type: APP_MODEL_FAILED, err });
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
