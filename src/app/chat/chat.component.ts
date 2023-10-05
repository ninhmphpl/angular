import {AfterViewChecked, AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environments} from "../environments";

const urlSocket = environments.url.replace("http", "ws")
const urlHost = environments.url
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
  })
export class ChatComponent implements OnInit, AfterViewChecked{
  @ViewChild('scrollableDiv') scrollableDiv!: ElementRef;
  user: string = ""
  listMessage: ListMessage[] = []
  message: Message[] = []
  sockets!: WebSocket;
  errorConnect: string = ""

  constructor(private http: HttpClient) {
  }
  getMessage() {
    this.http.get( urlHost + "/gpt-service/message").subscribe((value: any) => {
      this.listMessage = value
      if(this.listMessage.length > 0) this.changeSession(0)
    }, error => {
      console.log(error.error)
    })
  }
  deleteMessage(i : number){
    this.http.delete(urlHost + "/gpt-service/message/" + this.listMessage[i].id).subscribe((value: any) => {
      console.log(value)
      this.listMessage.splice(i,1)
    }, error => {
      console.log(error.error)
    })
  }


  ngOnInit(): void {
    this.getMessage()
    this.connect((id, message1) =>{
      this.pushMessage(id, message1)
      this.scrollToBottom()
    })
  }
  pushMessage(id : string, message : Message){
    for (let i = 0 ; i <  this.listMessage.length ; i ++){
      if(this.listMessage[i].id === id){
        this.listMessage[i].message.push(message)
        if(message.role !== 'admin'){
          const elementToMove = this.listMessage[i];
          this.listMessage.splice(i, 1);
          this.listMessage.unshift(elementToMove)
        }
        return
      }
    }
    let lm : Message[] = []
    lm.push(message)
    this.listMessage.unshift(new ListMessage(id, lm))
  }

  connect(action: (id : string ,message: Message) => any) {
    let url =
    this.sockets = new WebSocket(urlSocket + '/message?id=admin');
    this.sockets.onopen = ev => {
      console.log("Connected")
    }
    this.sockets.onmessage = function (event) {
      let message : Message = JSON.parse(event.data)
      action(message.userId, message)
    }
    this.sockets.onclose = ev => {
      this.errorConnect = "Error connect"
    }
  }
  send(message: string) {
    message = this.user + "&&" + message
    console.log(message)
    if (this.sockets != null) this.sockets.send(message)
  }

  changeSession(i : number){
    this.user = this.listMessage[i].id
    this.message = this.listMessage[i].message
  }
  seenMakeNew(){
    for(let i = 0 ; i < this.listMessage.length ; i ++){
      let seen = 0
      for(let j = this.listMessage[i].message.length -1 ; j >= 0 ; j--){
        if(this.listMessage[i].message[j].role === "admin") break
        else seen++
      }
      this.listMessage[i].seen = seen
    }
  }
  scrollToBottom() {
    const div = this.scrollableDiv.nativeElement;
    div.scrollTop = div.scrollHeight;
  }

  ngAfterViewChecked(): void {
    this.seenMakeNew()
    this.scrollToBottom()
  }

}

class Message {
  constructor(name: string, content: string, role: string, createAt : number) {
    this.userId = name;
    this.content = content;
    this.role = role;
    this.createAt = createAt;
  }

  userId!: string
  name!: string
  content!: string
  role!: string
  createAt! : number;
}

class ListMessage {
  constructor(id: string, message: Message[]) {
    this.id = id;
    this.message = message;
    this.seen = 0
  }

  id!: string;
  seen! : number;
  message!: Message[]
}
