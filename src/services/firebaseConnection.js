import firebase from "firebase/compat/app";
import "firebase/compat/auth";  
import "firebase/compat/firestore";
 
const firebaseConfig = {
    apiKey: "AIzaSyDG1HVI_j9FDkSAhYs3TccJYMzsYD6J8vU",
    authDomain: "uol-teste-5ba4e.firebaseapp.com",
    projectId: "uol-teste-5ba4e",
    storageBucket: "uol-teste-5ba4e.appspot.com",
    messagingSenderId: "119628456016",
    appId: "1:119628456016:web:6f39fee79c963c7554b155",
    measurementId: "G-83GEL27SLN"
  };
  
  // Initialize Firebase
 

    firebase.initializeApp(firebaseConfig);

    export default firebase;

 
 

