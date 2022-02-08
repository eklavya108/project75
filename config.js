import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyASrYXGoxDh473ZYNnFfCwq7bqDzW7xigQ",
  authDomain: "project71-3e058.firebaseapp.com",
  projectId: "project71-3e058",
  storageBucket: "project71-3e058.appspot.com",
  messagingSenderId: "375666272389",
  appId: "1:375666272389:web:3b15cfba2d1876e6e521ec"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
