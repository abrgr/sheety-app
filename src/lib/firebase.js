import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

// TODO: we're better than this
const config = {
  apiKey: "AIzaSyDlMWJ88fbnULtnGhPDtw4ajqdcT8YSwvo",
  authDomain: "green-chi-194817.firebaseapp.com",
  databaseURL: "https://green-chi-194817.firebaseio.com",
  projectId: "green-chi-194817",
  storageBucket: "green-chi-194817.appspot.com",
  messagingSenderId: "669147253643"
};

firebase.initializeApp(config);

export default firebase;
