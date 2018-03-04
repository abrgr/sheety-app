import firebasePromise from './firebase';
import ensureAuthenticated from './ensure-authenticated';

function getFieldValue(collection, pathGenerator, field) {
  return Promise.all([
    ensureAuthenticated(true),
    firebasePromise
  ]).then(([uid, firebase]) => (
    firebase.firestore()
      .collection(collection)
      .doc(pathGenerator(uid))
      .get()
      .then(doc => doc.get(field))
      .catch(err => {
        console.error('Failed to get field value', err);
        throw err;
      })
  ));
}

function setFieldValue(collection, pathGenerator, field, value) {
  return Promise.all([
    ensureAuthenticated(true),
    firebasePromise
  ]).then(([uid, firebase]) => (
    firebase.firestore()
      .collection(collection)
      .doc(pathGenerator(uid))
      .set({
        [field]: value
      }, { merge: true })
  )).catch(err => {
    console.error('Failed to set user value', err);
    throw err;
  });
}

export function getUserValue(doc, field) {
  return getFieldValue('user-values', (uid) => `${doc}/private/${uid}`, field);
}

export function setUserValue(doc, field, value) {
  return setFieldValue('user-values', (uid) => `${doc}/private/${uid}`, field, value);
}

export function getAggregateValue(doc, field, aggType) {
  const aggregator = aggregators[aggType];
  if ( !aggregator ) {
    console.error('Bad aggregator type', aggType);
    return Promise.resolve(null);
  }

  return getFieldValue(
    'aggregate-values',
    () => doc,
    field
  ).then(aggregator)
   .catch(err => {
    console.error('Failed to load aggregate value', err);
    throw err;
  });
}

const aggregators = {
  'mean': (aggVal) => aggVal ? aggVal.sum / aggVal.count : null,
  'sum': (aggVal) => aggVal ? aggVal.sum * aggVal.count : null
};
