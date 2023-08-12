import { Component } from '@angular/core';
import {environment} from "../environment";
import {HttpClient} from "@angular/common/http";
import {getMessaging, getToken} from "firebase/messaging";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {initializeApp} from "firebase/app";
const url = environment.url
const firebaseConfig = environment.firebaseConfig
@Component({
  selector: 'app-login-firebase',
  templateUrl: './login-firebase.component.html',
  styleUrls: ['./login-firebase.component.scss']
})
export class LoginFirebaseComponent {
  token : any;
  app : any
  provider : GoogleAuthProvider;
  constructor(private http : HttpClient) {
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
          this.token = idToken

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
  getTokenMessage(getTokenResult? : (token : string)=> any){
    const messaging = getMessaging(this.app);
    let key = "BKFOKfzqhmw-IGaYENr915z5spLUuyWmcBqFWU6hoWXh6DRyFnQ_QbE8FdZ4J1xTCUL00RsdqK7WjekCgDPjZQA"
    getToken(messaging, {vapidKey: key}).then((currentToken) => {
      if (currentToken) {
        console.log(currentToken)
        alert(currentToken)
        // Send the token to your server and update the UI if necessary
        // ...
      } else {
        // Show permission request UI
        console.log('No registration available. Request permission to generate one.');
        // ...
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // ...
    });
  }
}
