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
  table: any;
  chess: any;
  unit: any;
  move : any = {}

  constructor(
    public api: APIService,
    public activeRouter: ActivatedRoute,
    public socketService: SocketService,
    public playService: PlayService
  ) {
  }

  ngOnInit(): void {
    let tableId = this.activeRouter.snapshot.paramMap.get("id");
    this.username = this.activeRouter.snapshot.paramMap.get("username");
    // this.connectTable(tableId)
    // setTimeout(()=> this.getTable(tableId),1000)

    this.playService.connect(tableId, this.username,
      (data: any) => this.table = data,
      (data: any) => this.chess = data
    )

  }
  moveChoice(toX : number , toY : number){
    this.move.toX = toX;
    this.move.toY = toY
    this.playService.move(this.move)
  }
  choice(unit: any, x: number, y: number) {
    console.log("choice:")
    console.log(unit)
    if (unit && unit.name) {
      let black = this.table.player1.name == unit.player.name
      this.unit = unit
      if (unit.player.name != this.username) return;
      this.move.x = x;
      this.move.y = y;
      if (unit.name == 'PAWN') this.rolePawns(black, x, y)
    }

  }

  resetChoice(){
    for (let y = 0 ; y <  this.chess.length ; y++){
      for (let x = 0; x < this.chess[0].length; x++ ){
        if(this.chess[y][x] && this.chess[y][x].name){
          this.chess[y][x].color = null
        }else{
          this.chess[y][x] = null
        }
      }
    }
  }

  rolePawns(black: boolean, x: number, y: number) {
    this.resetChoice()
    console.log("role pawn: ")
    let number = 1
    if ((y == 1 && black) || (y == 6 && !black)) number = 2
    for (let i = 0; i < number && i > -number;) {
      if (black) {
        i++
      } else {
        i--
      }
      let node = this.chess[y+i][x]
      if (node == null) {
        this.chess[y+i][x] = {color: "blue"}
      } else if (node.player.name == this.username) {
        break
      } else {
        node.color = "red"
        break
      }
      console.log(this.chess)
    }
  }




}
