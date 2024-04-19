import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environment";

@Component({
  selector: 'app-token-checking',
  templateUrl: './token-checking.component.html',
  styleUrls: ['./token-checking.component.scss']
})
export class TokenCheckingComponent implements OnInit {
  data: any[] = []

  size: number = 2;
  page: number = 0;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getData()
  }

  previous() {
    if (this.page == 0) {
      return;
    }
    if(this.page <= 0){
      this.page = 0;
    }
    this.page = this.page - 1;
    this.getData();
  }

  next() {
    if (this.data.length < this.size) {
      return;
    }
    this.page = this.page + 1;
    this.getData();
  }

  getData() {
    this.http.get<any>(environment.apiUrl + "/api/checking/token", {
      params: {
        page: this.page,
        size: this.size
      }
    }).subscribe((data) => {
      this.data = data;
      console.table(this.data);
      console.log(this.data)
    }, error => {
      alert("Error: " + error.error.message)
    });
  }
}
