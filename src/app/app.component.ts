import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, throwError} from "rxjs";
import {uploadFile} from "../lib/upload.socket";
import {log2} from "./Log";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  host = ""
  version = ""
  log: any;

  constructor(private http: HttpClient) {
  }

  fileData: any[] = [];
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
      }
    )).subscribe((data: any) => {
      data.status = true;
      this.fileData[i] = data;
    })
  }

  ngOnInit(): void {
    this.http.get("../assets/environment.json",
      {headers: new HttpHeaders({'Cache-Control': 'no-cache'})}).subscribe((data: any) => {
      this.host = data.host;
      this.version = data.version;
      this.getList();
    })
  }

  filterName(event: any) {
    for (let a of this.fileData) {
      a.status = a.name.toLowerCase().indexOf(event.toLowerCase()) != -1;
    }
  }

  filterTypeName(event: any) {
    for (let a of this.fileData) {
      if (a.status) {
        a.status = a.typeName.toLowerCase().indexOf(event.toLowerCase()) != -1;
      }
    }
  }

  filter(name: any, typeName: any) {
    this.filterName(name)
    this.filterTypeName(typeName)
  }

  uploadFile(event: any, typeName: string) {
    let files: File[] = event.target.files
    for (let file of files) {
      let url = `ws://${this.host}/upload`
      uploadFile(file, url, typeName, (data: string) => {
        this.log = log2(file.name , data)
        this.getList()
      })
    }
  }

  delete( id: number) {
    let url = `http://${this.host}/upload/manager/` + id;
    this.http.delete(url).pipe(catchError((error: any) => {
      alert(JSON.stringify(error))
      return throwError(() => new Error('Something bad happened; please try again later.(Lỗi không rõ)'))
    })).subscribe((data: any) => {
      alert("Deleted")
      this.getList()
    })
  }
}
