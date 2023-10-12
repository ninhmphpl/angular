import {Component, OnInit} from '@angular/core';
import {RequestService} from "./request.service";

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit{
  constructor(public request : RequestService) {
  }
  ngOnInit(): void {
    this.request.get(0)
  }
  next(){
    if(this.request.page >= this.request.totalPages) return
    this.request.get(this.request.page + 1)
  }
  previous(){
    if(this.request.page <= 0) return
    this.request.get(this.request.page - 1)
  }
}
