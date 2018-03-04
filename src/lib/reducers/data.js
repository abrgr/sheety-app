import { Record } from 'immutable';
import { Sheet, Presenter } from 'sheety-model';
import Calculator from 'sheety-calculator';
import {
  REQUESTED_APP_MODEL,
  RECEIVED_APP_MODEL,
  APP_MODEL_FAILED,
  SET_CELL_VALUES,
  SET_ASYNC_CELL_VALUE
} from '../actions';
import { getters, updaters } from '../sheet-funcs';

const initialState = new Record({
  sheet: null,
  calculatedValues: null,
  presenter: null,
  isLoading: false,
  err: null,
  calc: null
})();

export default function data(state = initialState, action) {
  switch ( action.type ) {
    case REQUESTED_APP_MODEL:
      return state.merge(initialState).merge({
        isLoading: true
      });
    case RECEIVED_APP_MODEL:
      const sheet = new Sheet(action.model);
      const calc = new Calculator(sheet, getters, updaters);
      return state.merge({
        sheet,
        calc,
        presenter: new Presenter(action.presenter),
        isLoading: false,
        calculatedValues: calc.vals,
        err: null
      });
    case APP_MODEL_FAILED:
      return state.merge(initialState).merge({
        err: action.err
      });
    case SET_CELL_VALUES:
      return state.merge({
        calculatedValues: state.calc.setValues(action.valuesByCellRef)
      });
    case SET_ASYNC_CELL_VALUE:
      return state.merge({
        calculatedValues: state.calc.setCachedCellValue(action.cellRef, action.value)
      });
    default:
      return state;
  }
}
