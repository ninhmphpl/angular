import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent {
  public files: File[] = [];
  public imgSrc: any[] = []
  constructor(
    private http: HttpClient
  ) { }

  public getFile(file: any) {
    let f: File = file.target.files.item(0);

    const reader = new FileReader();
    reader.onload = () => this.imgSrc.push({src: reader.result, file: f});
    reader.readAsDataURL(f);

    this.files.push(f)
  }

  public post() {
    let data = new FormData();
    for(let i = 0 ; i < this.files.length ; i++ ){
      data.append("files", this.files[i])
    }
    
    this.http.post('http://localhost:8080', data).subscribe()
  }

}
