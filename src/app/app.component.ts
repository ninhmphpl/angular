import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, throwError} from "rxjs";
import {uploadFile} from "../lib/upload.socket";
import {log2} from "./Log";
import {alertError} from "../lib/alert";

declare const environmentJs: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  host = ""
  version = ""
  log : Map<string, string> = new Map<string, string>();
  constructor(private http: HttpClient) {
  }

  fileData: any[] = [];


  getList() {
    let url = `http://${this.host}/data/v2`;
    this.http.get<any>(url).pipe(catchError((error: any) => {
      alert(JSON.stringify(error))
      return throwError(() => new Error('Something bad happened; please try again later.(Lỗi không rõ)'))
    })).subscribe((data: any) => {
      if (data.code != 200) alertError("Error something")
      this.fileData = data.data
      for (let a of this.fileData) {
        a.status = true;
      }
    })
  }

  update(i: number) {
    let file = this.fileData[i];
    let url = `http://${this.host}/data/v2`;
    this.http.post(url, file).pipe(catchError((error: any) => {
        alert(JSON.stringify(error))
        return throwError(() => new Error('Something bad happened; please try again later.(Lỗi không rõ)'))
      }
    )).subscribe((data: any) => {
      if(data.code != 200) alertError("Update Error " + data.data )
      this.getList();
    })
  }

  ngOnInit(): void {
      this.host = window.location.hostname;;
      this.getList()
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
      let url = `ws://${this.host}/upload2`
      uploadFile(file, url, typeName, (data: string) => {
        this.log.set(file.name, data)
        this.getList()
      }, (percent : string)=>{
        this.log.set(file.name, percent)
      })
    }
  }

  delete(id: number) {
    let url = `http://${this.host}/data/v2/` + id;
    this.http.delete(url).pipe(catchError((error: any) => {
      alert(JSON.stringify(error))
      return throwError(() => new Error('Something bad happened; please try again later.(Lỗi không rõ)'))
    })).subscribe((data: any) => {
      alert("Deleted")
      this.getList()
    })
  }
}
