import firebase from "firebase";




const firebaseConfig = {
    apiKey: "AIzaSyAX3akklUx7BJMfZF28g4hvvIks4FsQzF0",
    authDomain: "manish-tinder-clone.firebaseapp.com",
    projectId: "manish-tinder-clone",
    storageBucket: "manish-tinder-clone.appspot.com",
    messagingSenderId: "171938321570",
    appId: "1:171938321570:web:95ea65104c106cf386b3fb",
    measurementId: "G-61G5MGLNYB"
};


  const firebaseApp = firebase.initializeApp(firebaseConfig);;
  const database = firebaseApp.firestore();

export default database;