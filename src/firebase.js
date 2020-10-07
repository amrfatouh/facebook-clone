import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZNl7bowALl9SYgFCIyVN93hH4agJ4X_k",
  authDomain: "facebook-clone-6709e.firebaseapp.com",
  databaseURL: "https://facebook-clone-6709e.firebaseio.com",
  projectId: "facebook-clone-6709e",
  storageBucket: "facebook-clone-6709e.appspot.com",
  messagingSenderId: "300129315781",
  appId: "1:300129315781:web:1c3a0ed015716a08f8b9ac",
  measurementId: "G-BTMDG1CFXT",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
