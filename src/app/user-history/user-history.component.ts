import {Component, OnInit} from '@angular/core';
import {UserHistoryService} from "./user-history.service";

@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.scss']
})
export class UserHistoryComponent implements OnInit{
  constructor(public userHistory : UserHistoryService) {
  }
  ngOnInit(): void {
    this.userHistory.get(0)
  }
  next(){
    if(this.userHistory.page >= this.userHistory.totalPages) return
    this.userHistory.get(this.userHistory.page + 1)
  }
  previous(){
    if(this.userHistory.page <= 0) return
    this.userHistory.get(this.userHistory.page - 1)
  }
}
