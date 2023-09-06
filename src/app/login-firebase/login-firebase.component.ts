import { Component } from '@angular/core';
import {environment} from "../environment";
import {initializeApp} from "firebase/app";
import {getMessaging, getToken} from "firebase/messaging";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = environment.firebaseConfig
@Component({
  selector: 'app-login-firebase',
  templateUrl: './login-firebase.component.html',
  styleUrls: ['./login-firebase.component.scss'],
})
export class LoginFirebaseComponent {
  token : any;
  app : any
  constructor() {
    this.app = initializeApp(firebaseConfig);
    getAnalytics(this.app);

  }

  login(){
    let provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    provider.setCustomParameters({
      'login_hint': 'user@example.com'
    });
    let auth = getAuth(this.app)
    auth.languageCode = 'it';
    signInWithPopup(auth, provider)
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
  getTokenMessage(){
    const messaging = getMessaging(this.app);
    let key = "BAAbkjHAudoD8nTk3yahIqB10_FCcMh2EpGTQjUX_R3Z2D1A_pBc5APWkGGihniSG9fym6kHaOMysssH_FrpYws"
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
