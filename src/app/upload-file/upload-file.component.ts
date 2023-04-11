import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit{
  socket = new WebSocket("ws://localhost:1999/upload");



  ngOnInit(): void {
    this.socket.onopen = function() {
      console.log("WebSocket connection opened.");
    };

    this.socket.onmessage = function(event) {
      console.log("Received message: " + event.data);
    };

    this.socket.onclose = function() {
      console.log("WebSocket connection closed.");
    };

    this.socket.onerror = function(event) {
      console.error("WebSocket error:", event);
    };
  }

}
