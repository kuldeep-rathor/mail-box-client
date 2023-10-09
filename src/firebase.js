import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDPP1cpodJ2sLNvBMkJaxMFC1lrSZLFUN0",
  authDomain: "clone-b887b.firebaseapp.com",
  projectId: "clone-b887b",
  storageBucket: "clone-b887b.appspot.com",
  messagingSenderId: "1025763786407",
  appId: "1:1025763786407:web:d0037a80f348fa7f3fe582",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
