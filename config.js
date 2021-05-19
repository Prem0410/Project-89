import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyBG_4zoYEnrZArMrn9oMme9mjSnXDN5VZQ",
  authDomain: "barter-system-app-5a03b.firebaseapp.com",
  projectId: "barter-system-app-5a03b",
  storageBucket: "barter-system-app-5a03b.appspot.com",
  messagingSenderId: "209838844487",
  appId: "1:209838844487:web:8de9979cf8f6deca379f62",
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
