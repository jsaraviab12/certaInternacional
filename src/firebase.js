import firebase from 'firebase/app'
import 'firebase/firestore'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyADVktFXzeFGB6BIp-IrJgm9UTe8IGoSmQ",
    authDomain: "certa-b5d1f.firebaseapp.com",
    databaseURL: "https://certa-b5d1f.firebaseio.com",
    projectId: "certa-b5d1f",
    storageBucket: "certa-b5d1f.appspot.com",
    messagingSenderId: "104706421771",
    appId: "1:104706421771:web:74b9277b1aa464eebf030e",
    measurementId: "G-T51J20VJFW"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
 export const db = fb.firestore();

