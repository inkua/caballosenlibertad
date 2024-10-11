import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "test-caballos-en-libertad.firebaseapp.com",
  projectId: "test-caballos-en-libertad",
  storageBucket: "test-caballos-en-libertad.appspot.com",
  messagingSenderId: "1091894138986",
  appId: "1:1091894138986:web:0eb98130c65889a4e3d213"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);