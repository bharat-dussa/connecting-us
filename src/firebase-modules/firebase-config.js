// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDx-ogH8iqnlps47aixAFfluRVlWA4N0EQ",
  authDomain: "connecting-us-51ec6.firebaseapp.com",
  projectId: "connecting-us-51ec6",
  storageBucket: "connecting-us-51ec6.appspot.com",
  messagingSenderId: "130952477244",
  appId: "1:130952477244:web:6be3affd36fd831256a139",
  measurementId: "G-C9WT6VPS97",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const fireStoredb = firebaseApp.firestore();
const fireAuth = firebase.auth();

export { fireStoredb, fireAuth };
