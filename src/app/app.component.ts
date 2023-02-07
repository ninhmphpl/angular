import { Component } from '@angular/core';
import { MessageServiceService } from './service/message-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'websocket-frontend';
  input : any;
  constructor(public messageService: MessageServiceService) {}

  sendMessage() {
    if (this.input) {
      this.messageService.sendMessage(this.input);
      this.input = '';
    }
  }
}
