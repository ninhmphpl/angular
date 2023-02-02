// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAunDHJ-xdqfOP75d5FZrWKFXpvRHyKw84",
  authDomain: "product-2023.firebaseapp.com",
  projectId: "product-2023",
  storageBucket: "product-2023.appspot.com",
  messagingSenderId: "110504742968",
  appId: "1:110504742968:web:face4d722781780f6f16cd",
  measurementId: "G-Y5TVVQ4178"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);