import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, throwError} from "rxjs";
import {environment} from "../../environment/environtments";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  host = environment.host
  version = environment.version

  constructor(private http: HttpClient) {
  }

  fileData: any;
  title = 'source';

  getList() {
    let url = `http://${this.host}/upload/manager`;
    this.http.get<any>(url).pipe(catchError((error: any) => {
      alert(JSON.stringify(error))
      return throwError(() => new Error('Something bad happened; please try again later.(Lỗi không rõ)'))
    })).subscribe((data: any) => {
      this.fileData = data
      for (let a of this.fileData) {
        a.status = true;
      }
    })
  }

  update(i: number) {
    let file = this.fileData[i];
    let url = `http://${this.host}/upload/manager`;
    this.http.put(url, file).pipe(catchError((error: any) => {
      alert(JSON.stringify(error))
      return throwError(() => new Error('Something bad happened; please try again later.(Lỗi không rõ)'))
    })).subscribe((data: any) => {
      data.status = true;
      this.fileData[i] = data;
    })
  }

  ngOnInit(): void {
    this.getList();
  }

  filterName(event: any) {
    for (let a of this.fileData) {
      a.status = a.name.toLowerCase().indexOf(event.target.value.toLowerCase()) != -1;
    }
  }

  filterTypeName(event: any) {
    for (let a of this.fileData) {
      a.status = a.typeName.toLowerCase().indexOf(event.target.value.toLowerCase()) != -1;
    }
  }
}
