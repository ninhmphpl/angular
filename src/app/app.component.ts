import {Component, OnInit} from '@angular/core';
import {AngularFireMessaging} from '@angular/fire/compat/messaging';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {getMessaging, getToken} from "firebase/messaging";
import {initializeApp} from "firebase/app";
import {environment} from "./environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private afMessaging: AngularFireMessaging, private afAuth: AngularFireAuth) {
  }



// Add the public key generated from the console here.

  requestPermission() {
    this.afMessaging.requestToken.subscribe((token: any) => {
      console.log('Permission granted! Save to the server!', token);
      // Gửi token lên server để lưu trữ hoặc gửi thông báo đẩy
    }, (error: any) => {
      console.error(error);
    });
  }

  listenForMessages() {
    this.afMessaging.messages.subscribe((message: any) => {
      console.log('Got a message', message);
      // Hiển thị thông báo đẩy khi có tin nhắn mới
    });
  }

  async logout() {
    await this.afAuth.signOut();
    window.location.reload();
  }

  ngOnInit(): void {


// Initialize Firebase
    const app = initializeApp(environment.firebase);
    let messaging: any = getMessaging(app);
    getToken(messaging,{ vapidKey: 'BHftTOMHGAFaBtgJ_BYnQs-z3UgeynXq2FWElVFzRIv1fYO47VDFpnBAm8WPGMX9dZ1SCqG0C6NnYjtqJ9LgPPw' }).then((currentToken : any) => {
      if (currentToken) {
        console.log(currentToken)
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
        // ...
      }
    }).catch((err : any) => {
      console.log('An error occurred while retrieving token. ', err);
      // ...
    });

  }
}
