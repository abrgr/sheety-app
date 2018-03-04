import Calculator from 'sheety-calculator';
import * as persistence from './persistence';
import store from './store';
import { dataActions } from './action-creators';

function getUserValue([doc, field, defaultValue], cellRef) {
  persistence.getUserValue(doc, field)
             .then(userValue => {
               if ( typeof userValue !== 'undefined' && userValue !== null ) {
                 store.dispatch(dataActions.setAsyncCellValue(cellRef, userValue));
               }
             }).catch(err => console.error('Failed to get user value', err));
  return defaultValue;
}

function getAggregateValue([doc, field, aggregateType, defaultValue], cellRef) {
  persistence.getAggregateValue(doc, field, aggregateType)
             .then(aggregateValue => {
               if ( typeof aggregateValue !== 'undefined' && aggregateValue !== null ) {
                 store.dispatch(dataActions.setAsyncCellValue(cellRef, aggregateValue));
               }
             }).catch(err => console.error('Failed to get aggregate value', err));
  return defaultValue;
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
