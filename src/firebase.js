// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDxvt6qPYycH1AglpgDyN_EabBvnXYAw0w",
  authDomain: "bilgiss.firebaseapp.com",
  databaseURL: "https://bilgiss-default-rtdb.firebaseio.com",
  projectId: "bilgiss",
  storageBucket: "bilgiss.appspot.com",
  messagingSenderId: "872233385823",
  appId: "1:872233385823:web:10e9e93c3ea0e4aa7800ea",
  measurementId: "G-2LKCHNV0EW",
});

const db = firebaseApp.firestore();

export default db;
