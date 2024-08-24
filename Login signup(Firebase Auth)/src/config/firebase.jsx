// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBybXdakeKqB0lxayc8n3qQaLahD2AFEq4",
  authDomain: "login-auth-2c725.firebaseapp.com",
  projectId: "login-auth-2c725",
  storageBucket: "login-auth-2c725.appspot.com",
  messagingSenderId: "91014113712",
  appId: "1:91014113712:web:273d9164323e8848e88e75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const Database = getFirestore(app);




