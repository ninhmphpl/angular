import {Component, OnInit} from '@angular/core';
import {APIService} from "../service/api.service";
import {environment} from "../../environment/environments";
import {HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {SocketService} from "../service/socket.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{

  tables : any[] = [];
  stomp : any;
  username : any;
  constructor(
    public api : APIService,
    public router : Router,
    public socketService : SocketService
    ) {
  }

  ngOnInit(): void {
    this.getTable()
  }

  getTable(){
    let url = environment.url + "/table"
    this.api.getMapping(url, (data : any)=>{
      this.tables = data
    })
  }

  connectTable(username : any){
    let url = environment.url + "/ws"
    let subscribeUrl = "/topic/table"
    this.username = username
    this.socketService.connect(url, subscribeUrl, {"username" : this.username}, (payload : any)=>{
      this.tables = JSON.parse(payload.body)
    })
  }

  createRoom(roomId : any){
    let url = environment.url + "/table"
    let table = {
      id : roomId,
      player1 : {
        name : this.username
      }
    }
    this.api.postMapping(url, table, (data : any)=>{
      this.join(data.id)
    })
  }


  join(tableId : any){
    let url = environment.url + "/table/join/" + tableId
    this.api.setHeader(new HttpHeaders({"username" : this.username}))
    this.api.getMapping(url, (data : any)=>{
      this.router.navigate([`/play/${tableId}/${this.username}` ])
    })
  }






}
