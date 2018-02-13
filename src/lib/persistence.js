import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyDlMWJ88fbnULtnGhPDtw4ajqdcT8YSwvo",
  authDomain: "green-chi-194817.firebaseapp.com",
  databaseURL: "https://green-chi-194817.firebaseio.com",
  projectId: "green-chi-194817",
  storageBucket: "green-chi-194817.appspot.com",
  messagingSenderId: "669147253643"
};

firebase.initializeApp(config);

const db = firebase.firestore();
const auth = firebase.auth();

function authenticate(allowAnonymous) {
  if ( auth.currentUser ) {
    return Promise.resolve(auth.currentUser.uid);
  }

  return auth.signInAnonymouslyAndRetrieveData()
             .then(creds => creds.user.uid);
}

function getFieldValue(collection, pathGenerator, field) {
  return authenticate(true).then(uid => (
    db.collection(collection)
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
  return authenticate(true).then(uid => (
    db.collection(collection)
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
  return getFieldValue('user-values', (uid) => `${doc}/user-values/${uid}`, field);
}

export function setUserValue(doc, field, value) {
  return setFieldValue('user-values', (uid) => `${doc}/user-values/${uid}`, field, value);
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
