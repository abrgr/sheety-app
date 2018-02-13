import Calculator from 'sheety-calculator';
import * as persistence from './persistence';
import store from './store';
import { dataActions } from './action-creators';

function getUserValue([doc, field], cellRef) {
  persistence.getUserValue(doc, field)
             .then(userValue => {
               store.dispatch(dataActions.setAsyncCellValue(cellRef, userValue));
             }).catch(err => console.error('Failed to get user value', err));
  return Calculator.LOADING;
}

function getAggregateValue([doc, field, aggregateType], cellRef) {
  persistence.getAggregateValue(doc, field, aggregateType)
             .then(userValue => {
               store.dispatch(dataActions.setAsyncCellValue(cellRef, userValue));
             }).catch(err => console.error('Failed to get aggregate value', err));
  return Calculator.LOADING;
}

function setUserValue([doc, field], cellRef, userValue) {
  if ( doc === Calculator.LOADING || field === Calculator.LOADING ) {
    return false; // we did not consume userValue
  }

  persistence.setUserValue(doc, field, userValue)
             .catch(err => console.error('Failed to set user value', err));

  return true; // we consumed userValue
}

const getters = {
  SHEETYUSERVALUE: getUserValue,
  SHEETYAGGREGATEVALUE: getAggregateValue
};

const updaters =  {
  SHEETYUSERVALUE: setUserValue
};

export {
  getters,
  updaters
};
