// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-6a0f9.firebaseapp.com",
  projectId: "blog-app-6a0f9",
  storageBucket: "blog-app-6a0f9.appspot.com",
  messagingSenderId: "454024882042",
  appId: "1:454024882042:web:172662b04cbbf9b2c358c3",
  measurementId: "G-JEXBNPV1DH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);