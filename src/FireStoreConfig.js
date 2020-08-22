import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';

firebase.initializeApp({
  apiKey: "AIzaSyDdOY4JfyzuCkqFnPgPJGYZaUJ5BEGOTdQ",
  authDomain: "autentikam-8ae31.firebaseapp.com",
  databaseURL: "https://autentikam-8ae31.firebaseio.com",
  projectId: "autentikam-8ae31",
  storageBucket: "autentikam-8ae31.appspot.com",
  messagingSenderId: "980672043020",
  appId: "1:980672043020:web:b4316b72592b32c4d2f629",
  measurementId: "G-7MX0YQBL8F"
});


let db = firebase.firestore();
db.settings({timestampsInSnapshots:true});

export let authAutentikam = firebase.auth();

export default db;