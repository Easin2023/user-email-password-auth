// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3ZILzVp4vF_QaMWizC6Jd-tggfofdaGo",
  authDomain: "email-password-auth-58a0a.firebaseapp.com",
  projectId: "email-password-auth-58a0a",
  storageBucket: "email-password-auth-58a0a.appspot.com",
  messagingSenderId: "437071159476",
  appId: "1:437071159476:web:f137cccc2056ac95e1b7e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;