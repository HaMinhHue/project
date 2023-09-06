// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmbbewFGLI6pKoikq5_1taCZaw3Ee0UhI",
  authDomain: "reactjs-vti-ver3.firebaseapp.com",
  projectId: "reactjs-vti-ver3",
  storageBucket: "reactjs-vti-ver3.appspot.com",
  messagingSenderId: "706975034872",
  appId: "1:706975034872:web:22430f7c20d7e436633a0d",
  measurementId: "G-JBKJM4HLYN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);