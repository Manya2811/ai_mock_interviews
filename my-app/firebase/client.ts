// Import the functions you need from the SDKs you need

import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFjziURSRC1eykgqzLDoC-Y3QWd_pfiYg",
  authDomain: "ai-mock-interview-3410e.firebaseapp.com",
  projectId: "ai-mock-interview-3410e",
  storageBucket: "ai-mock-interview-3410e.firebasestorage.app",
  messagingSenderId: "128619132420",
  appId: "1:128619132420:web:d8c82144f2dcc11f59a751",
  measurementId: "G-EQXH0XR3PB",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
