import {Component, OnInit} from '@angular/core';
import {APIService} from "../service/api.service";
import {ActivatedRoute} from "@angular/router";
import {environment} from "../../environment/environments";
import {SocketService} from "../service/socket.service";
import {PlayService} from "../service/play.service";


@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css']
})
export class PlayGameComponent implements OnInit {
  username: any;
  player: any;
  table: any;
  chess: any;

  constructor(
    public api: APIService,
    public activeRouter: ActivatedRoute,
    public socketService: SocketService,
    public playService : PlayService
  ) {
  }

  ngOnInit(): void {
    let tableId = this.activeRouter.snapshot.paramMap.get("id");
    this.username = this.activeRouter.snapshot.paramMap.get("username");
    // this.connectTable(tableId)
    // setTimeout(()=> this.getTable(tableId),1000)

    this.playService.connect(tableId,this.username,
      (data : any)=>this.table = data,
      (data : any)=> this.chess = data
    )

  }

  getTable(tableId: any) {
    let url = environment.url + "/table/" + tableId
    this.api.getMapping(url, (data: any) => {
      this.connectChess(tableId)
    })
    // let url = "/app/table"
    // this.socketService.stomp.send(url, {}, tableId)
  }

  connectTable(tableId: any) {
    let url = environment.url + "/ws"
    let subscribeUrl = "/topic/table/" + tableId
    this.socketService.connect(url, subscribeUrl, {"username" : this.username},
      (payload: any) => {
        console.log("payload")
        console.log(payload)
        this.table = JSON.parse(payload.body)
        this.getPlayer(this.table)
      })
  }

  connectChess(tableId : any) {
    let url = environment.url + "/ws"
    let subscribeUrl = "/topic/play/" + tableId
    this.socketService.connect(url, subscribeUrl, {"username" : this.username},
      (payload: any) => this.chess = JSON.parse(payload.body))
  }
  ready() {
    this.socketService.stomp.send("/app/ready", {}, JSON.stringify(this.table))
  }

  getPlayer(table: any) {
    if (table.player1 && this.username === table.player1.name) {
      this.player = table.player1
    }
    if (table.player2 && this.username === table.player2.name) {
      this.player = table.player2
    }
  }


}
