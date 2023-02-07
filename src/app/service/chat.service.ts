import { Injectable } from '@angular/core';
import { Stomp } from '@stomp/stompjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }
  ws: any;
  connect() {
    var socket = new WebSocket('ws://localhost:8080/greeting');
    // >> npm i @stomp/stompjs
    this.ws = Stomp.over(socket);

    this.ws.connect({},  (frame: any) => {
      this.ws.subscribe("/user/queue/errors", function (message: any) {
        alert("Error " + message.body);
      });

      this.ws.subscribe("/user/queue/reply", function (message: any) {
        alert("Message " + message.body);
      });
    }, function (error: any) {
      alert("STOMP error " + error);
    });
  }
  disconnect() {
    if (this.ws != null) {
      this.ws.close();
    }
    // setConnected(false);
    console.log("Disconnected");
  }
}


