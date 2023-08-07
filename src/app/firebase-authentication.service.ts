import {Injectable} from '@angular/core';
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import firebase from "firebase/compat";
import Auth = firebase.auth.Auth;

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthenticationService {
  app : any
  provider : GoogleAuthProvider;

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyBk7gs8EjXEiVROAY326uHKdFC6eLLNE8A",
      authDomain: "fir-project-ac36e.firebaseapp.com",
      projectId: "fir-project-ac36e",
      storageBucket: "fir-project-ac36e.appspot.com",
      messagingSenderId: "625100437167",
      appId: "1:625100437167:web:046a24919959220837c65a",
      measurementId: "G-LSFP62D2ZG"
    };
    this.app = initializeApp(firebaseConfig);
    this.provider = new GoogleAuthProvider();
    this.provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    this.provider.setCustomParameters({
      'login_hint': 'user@example.com'
    });
  }
  login(){
    let auth = getAuth(this.app)
    auth.languageCode = 'it';
    signInWithPopup(auth, this.provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if(credential){
          const token = credential.accessToken;
          console.log(token)
        }else {
          console.log("credential is null")
        }
        // The signed-in user info.
        const user = result.user;
        console.log(user)
        auth.currentUser?.getIdToken(true).then((idToken : any)=>{
          console.log(idToken)
        }).catch((error : any)=>{
          console.log(error)
        })
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      console.log(errorCode)
      const errorMessage = error.message;
      console.log(errorMessage)
      // The email of the user's account used.
      const email = error.customData.email;
      console.log(email)
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(credential)
    });
  }

  getToken(){
    let auth = getAuth(this.app)
    auth.currentUser?.getIdToken(true).then((idToken : any)=>{
      console.log(idToken)
    }).catch((error : any)=>{
      console.log(error)
    })
  }




}
