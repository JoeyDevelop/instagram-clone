// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpvtslGokA-ekI90evtt6rmEU-HsiPrB4",
  authDomain: "instagramclone-9b1d7.firebaseapp.com",
  projectId: "instagramclone-9b1d7",
  storageBucket: "instagramclone-9b1d7.appspot.com",
  messagingSenderId: "908602027204",
  appId: "1:908602027204:web:dff0ffafc938a19f9b6d91"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()