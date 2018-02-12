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

export function getUserValue(doc, field) {
  return authenticate(true).then(uid => {
    db.collection('user-values')
      .doc(`${doc}/user-values/${uid}`)
      .set({
        [field]: 78.4,
        'Something else': 'hello world'
      }, { merge: true }).then(x => {
        console.log(x);
      }).catch(e => {
        console.log(e);
      });;

    return db.collection('user-values')
             .doc(`${doc}/user-values/${uid}`)
             .get()
             .then(doc => doc[field])
             .then(val => {
               console.log('here', val);
             }).catch(err => console.error(err));
  });
}
