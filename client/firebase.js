// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdtr73Hhr-5PwjHWHYJWD5gvZsPVn1pGY",
  authDomain: "quickfx-2023.firebaseapp.com",
  projectId: "quickfx-2023",
  storageBucket: "quickfx-2023.appspot.com",
  messagingSenderId: "1012480853791",
  appId: "1:1012480853791:web:4c0dfa441de0079956922a",
  measurementId: "G-K57WPEG3J2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;
