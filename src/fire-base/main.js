import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getApp } from "firebase/app";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
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


// Initialize Cloud Storage and get a reference to the service
const firebaseApp = getApp();
const storage = getStorage(firebaseApp, "gs://my-custom-bucket");
