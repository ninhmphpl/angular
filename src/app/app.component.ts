import { Component } from '@angular/core';
import { ChatService } from './service/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public chat : ChatService){
    chat.connect()
  }
  
}
