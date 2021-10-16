import  firebase from "firebase/compat/app";
import "firebase/compat/database"

const firebaseConfig = {
  apiKey: "AIzaSyCE1LQCn-NmxkIgry3Xe-PIXKCbXwiGQcE",
  authDomain: "calculator-ef7a4.firebaseapp.com",
  databaseURL: "https://calculator-ef7a4-default-rtdb.firebaseio.com",
  projectId: "calculator-ef7a4",
  storageBucket: "calculator-ef7a4.appspot.com",
  messagingSenderId: "437152502394",
  appId: "1:437152502394:web:dcb62a44f3ac8d986a21c3",
};

const firebasedb = firebase.initializeApp(firebaseConfig);
export default firebasedb;

