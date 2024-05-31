// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbsUPJHvlO4bjb9N1G47r86viuDd_wpo0",
  authDomain: "test-e70dc.firebaseapp.com",
  projectId: "test-e70dc",
  storageBucket: "test-e70dc.appspot.com",
  messagingSenderId: "225300097749",
  appId: "1:225300097749:web:2d12b5522445341e4c505c",
  measurementId: "G-GCRXF6FPGC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, signInWithPopup, GoogleAuthProvider, signOut, db, doc, setDoc };
