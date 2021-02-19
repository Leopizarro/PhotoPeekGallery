import firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDnaQi7q73caf8AqxFw7uShp7RRLh_iV04",
    authDomain: "photopeek-66a1d.firebaseapp.com",
    projectId: "photopeek-66a1d",
    storageBucket: "photopeek-66a1d.appspot.com",
    messagingSenderId: "792506526796",
    appId: "1:792506526796:web:3006fb2910319324fcd8e9"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
