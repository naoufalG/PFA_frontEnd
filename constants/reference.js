import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyCkFF9WklNqGY2a0U_5xnuP216ahUlB9EE",
  authDomain: "examnaoufal.firebaseapp.com",
  databaseURL: "https://examnaoufal-default-rtdb.firebaseio.com",
  projectId: "examnaoufal",
  storageBucket: "examnaoufal.appspot.com",
  messagingSenderId: "137865292577",
  appId: "1:137865292577:web:a66496d362481022802c60",
};
firebase.initializeApp(config);

const rootRef = firebase.database().ref();
export const tasksRef = rootRef.child("tasks");
export const timeRef = firebase.database.ServerValue.TIMESTAMP;
