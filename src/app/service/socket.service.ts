import {Injectable} from '@angular/core';
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";

declare const Stomp: any;
declare const SockJS: any

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  stomp: any;

  constructor() {
  }

  connect(url: string, subscribeUrl : string, header : any, payload: any) {
    let socket = new SockJS(url);
    this.stomp = Stomp.over(socket);
    this.stomp.connect(header,
      () => {
        this.stomp.subscribe(subscribeUrl, (data: any) => {
          payload(data)
        })
      },
      this.onError)
  }

  onError(error: any) {
    console.log(error)
  }
}
