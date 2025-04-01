// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
const firebaseConfig = {
  apiKey: "AIzaSyCD027Hg3YcjASWQJjB9lMTKZLjxTCLbm0",
  authDomain: "login-auth-a75d3.firebaseapp.com",
  projectId: "login-auth-a75d3",
  storageBucket: "login-auth-a75d3.firebasestorage.app",
  messagingSenderId: "640801149574",
  appId: "1:640801149574:web:85601f8080c5a846733707"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;