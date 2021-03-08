// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD30_AUWOFGdZPBl_-evnJOi5VV_MVEIeg",
  authDomain: "challenge-59512.firebaseapp.com",
  projectId: "challenge-59512",
  storageBucket: "challenge-59512.appspot.com",
  messagingSenderId: "865389212845",
  appId: "1:865389212845:web:bbfa7c59c735ee42c58224",
  measurementId: "G-GEH496FC7V",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
