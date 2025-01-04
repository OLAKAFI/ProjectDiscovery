// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhF4YH75CNk2BnQaDLRi7MV2Iql355-uM",
  authDomain: "projectdiscoverme-d3663.firebaseapp.com",
  projectId: "projectdiscoverme-d3663",
  storageBucket: "projectdiscoverme-d3663.firebasestorage.app",
  messagingSenderId: "717962266185",
  appId: "1:717962266185:web:6c68d80401469c9ea3e198",
  measurementId: "G-G088ZCQWW0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);