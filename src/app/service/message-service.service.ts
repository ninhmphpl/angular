import { Injectable } from '@angular/core';
// Declare SockJS and Stomp
declare var SockJS: any;
declare var Stomp: any;
@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  constructor() {
    this.initializeWebSocketConnection();
  }
  public stompClient : any;
  public msg : any[] = [];
  initializeWebSocketConnection() {
    const serverUrl = 'http://localhost:8080/socket';
    const ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;
    // tslint:disable-next-line:only-arrow-functions
    this.stompClient.connect({}, function(frame : any) {
      that.stompClient.subscribe('/message', (message : any) => {
        if (message.body) {
          that.msg.push(message.body);
        }
      });
    });
  }
  
  sendMessage(message : any) {
    this.stompClient.send('/app/send/message' , {}, message);
  }
}
