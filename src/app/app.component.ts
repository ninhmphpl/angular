import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Sentence} from "../model/Sentence";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: Sentence[] = []

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  getList(question: any, document: any) {
    let body = {question: question, document: document}
    this.http.post("http://localhost:8080/embedding", body).subscribe((payload: any) => {
      this.data = payload
    }, (error: any) => {
      console.log(error)
    })
  }

  search(text: string) {
    let textArr: string[] = text.split(".")
    for (let i = 0; i < this.data.length; i++) {
      this.data[i].search = false;
      for (let t of textArr) {
        if (this.data[i].text.toLowerCase().indexOf(t.toLowerCase()) != -1) {
          this.data[i].search = true;
        }
      }
    }

  }


}
