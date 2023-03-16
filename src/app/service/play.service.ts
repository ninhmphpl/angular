import {Injectable} from '@angular/core';
import {environment} from "../../environment/environments";

declare const Stomp: any;
declare const SockJS: any

@Injectable({
  providedIn: 'root'
})
export class PlayService {
  stomp: any;
  unit : any;

  constructor() {
    let sock = new SockJS(environment.ws)
    this.stomp = Stomp.over(sock)
  }

  connect(tableId: any, username: any, payloadTable: any, payloadChess: any) {
    let sock = new SockJS(environment.ws)
    this.stomp = Stomp.over(sock)
    this.stomp.connect({"username": username},
      () => {
        console.log("Connect Complete");
        this.connectTableAndChess(tableId, payloadTable, payloadChess)
      },
      (error: any) => this.onError(error)
    )
  }

  onError(error: any) {
    console.log(error)
  }

  connectTableAndChess(tableId: any, payloadTable: any, payloadChess: any) {
    this.stomp.subscribe("/topic/table/" + tableId, (payload: any) => payloadTable(JSON.parse(payload.body)))
    this.stomp.subscribe("/topic/play/" + tableId, (payload: any) => payloadChess(JSON.parse(payload.body)))
    this.stomp.send("/app/table", {}, tableId)
  }

  ready(table : any) {
    this.stomp.send("/app/ready", {}, JSON.stringify(table))
  }

  move(move : any){

    this.stomp.send("/app/chess.move", {}, move)
  }

}
