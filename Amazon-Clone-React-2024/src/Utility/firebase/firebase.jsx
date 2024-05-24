import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArMDzfxrZkB8ynH88eW-WKkWC0AK1Z960",
  authDomain: "clone-2024-45a70.firebaseapp.com",
  projectId: "clone-2024-45a70",
  storageBucket: "clone-2024-45a70.appspot.com",
  messagingSenderId: "55609329058",
  appId: "1:55609329058:web:61613a347de48308899efb",
};

// ` To use fire base 

const firebaseApp = firebase.initializeApp(firebaseConfig);

// ` To use fire base data base

const db = firebaseApp.firestore();

// ` To use fire base authentication service

const auth = firebase.auth();

// ` To use fire base authentication service

export { auth };
export default db;
