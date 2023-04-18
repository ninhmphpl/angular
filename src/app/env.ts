// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const evi = {
  firebaseConfig : {
    apiKey: "AIzaSyATSp2Lz1GqAGlxWfAo_PvZ_3ev6eaXS8A",
    authDomain: "analytics-760a3.firebaseapp.com",
    projectId: "analytics-760a3",
    storageBucket: "analytics-760a3.appspot.com",
    messagingSenderId: "364583671529",
    appId: "1:364583671529:web:8011e93cbf2d05da558278",
    measurementId: "G-82GS8KYN3H"
  }
}
const firebaseConfig = {
  apiKey: "AIzaSyATSp2Lz1GqAGlxWfAo_PvZ_3ev6eaXS8A",
  authDomain: "analytics-760a3.firebaseapp.com",
  projectId: "analytics-760a3",
  storageBucket: "analytics-760a3.appspot.com",
  messagingSenderId: "364583671529",
  appId: "1:364583671529:web:8011e93cbf2d05da558278",
  measurementId: "G-82GS8KYN3H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
