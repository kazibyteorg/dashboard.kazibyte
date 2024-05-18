// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSu5YrUoOzNhP2FNLwae6hDrHSOGSOMT4",
  authDomain: "kazibyteauth.firebaseapp.com",
  projectId: "kazibyteauth",
  storageBucket: "kazibyteauth.appspot.com",
  messagingSenderId: "833651538536",
  appId: "1:833651538536:web:07c1f6f96b5deafc7799dd",
  measurementId: "G-S1JNTD2QHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);