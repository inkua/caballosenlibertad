
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "plantilla-e9c8c.firebaseapp.com",
  projectId: "plantilla-e9c8c",
  storageBucket: "plantilla-e9c8c.appspot.com",
  messagingSenderId: "628069291554",
  appId: "1:628069291554:web:f6df8c4ef79ca454ea1c7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)