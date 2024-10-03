
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "test-caballos-en-libertad.firebaseapp.com",
  projectId: "test-caballos-en-libertad",
  storageBucket: "test-caballos-en-libertad.appspot.com",
  messagingSenderId: "1091894138986",
  appId: "1:1091894138986:web:0eb98130c65889a4e3d213"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)