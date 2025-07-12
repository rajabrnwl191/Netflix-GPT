// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAj21Is9KjqCwmodN08lKAlY3sYG9FsmjI",
  authDomain: "netflix-gpt-ac8be.firebaseapp.com",
  projectId: "netflix-gpt-ac8be",
  storageBucket: "netflix-gpt-ac8be.firebasestorage.app",
  messagingSenderId: "829671655624",
  appId: "1:829671655624:web:52d04d73582f35552afdfd",
  measurementId: "G-JTWL59X4RN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();