// firebaseauth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// ✅ Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBXe-82X2gLedCts-GTZNEtt9uklH8DwKg",
  authDomain: "chand-glass-a09d8.firebaseapp.com",
  projectId: "chand-glass-a09d8",
  storageBucket: "chand-glass-a09d8.appspot.com",
  messagingSenderId: "826931709072",
  appId: "1:826931709072:web:a75632d13b7a7c1f934415"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Export auth functions
export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword };
