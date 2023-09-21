import {AfterViewChecked, AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";

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
    this.http.get("http://192.53.115.249:9999/gpt-service/message").subscribe((value: any) => {
      this.listMessage = value
      if(this.listMessage.length > 0) this.changeSession(0)
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
    this.sockets = new WebSocket(`ws:192.53.115.249:9999/message?id=admin`);
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
    if (this.sockets != null) this.sockets.send(this.user + "&&" + message)
  }

  changeSession(i : number){
    this.user = this.listMessage[i].id
    this.message = this.listMessage[i].message
  }
  scrollToBottom() {
    const div = this.scrollableDiv.nativeElement;
    div.scrollTop = div.scrollHeight;
  }

  ngAfterViewChecked(): void {
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
  }

  id!: string;
  message!: Message[]
}
