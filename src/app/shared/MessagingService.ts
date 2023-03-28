import { Injectable } from "@angular/core";
import { AngularFireMessaging } from '@angular/fire/messaging';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MessagingService{
    currentMessage = new BehaviorSubject(null);

    constructor(private angularFirebaseMessaging: AngularFireMessaging){
    }

    requestPerm(userName : string){
        this.angularFirebaseMessaging.requestToken.subscribe((token : any)=>{
            console.log(token);
        },
        (err : any)=>
        {
            console.error("No Permission "+ err);
        })
    }

    receiveMessage(){

    }
}
