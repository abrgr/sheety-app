import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

const firebasePromise = fetch('https://green-chi-194817.firebaseapp.com/__/firebase/init.json').then(response => (
  response.json()
)).then(config => {
  firebase.initializeApp(config);
  return firebase;
});

export default firebasePromise;
