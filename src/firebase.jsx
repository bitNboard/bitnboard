// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from 'firebase/database';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfbfJladuWULQ6tfRZlUVBwEIXJefI-OI",
  authDomain: "bitnboard-5d0db.firebaseapp.com",
  projectId: "bitnboard-5d0db",
  storageBucket: "bitnboard-5d0db.firebasestorage.app",
  messagingSenderId: "134193657596",
  appId: "1:134193657596:web:ad72910a9e6c9c8d550979",
  measurementId: "G-4XRGQWBZL1",
  databaseURL: "https://bitnboard-5d0db-default-rtdb.firebaseio.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const googleProvider = new GoogleAuthProvider();

const analytics = getAnalytics(app);