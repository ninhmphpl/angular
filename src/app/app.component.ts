import { Component } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { FileUploadFireBase } from 'src/environments/update-file-firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public filesUpload: FileUploadFireBase[] = []
  
  constructor(private storage: AngularFireStorage) { }

  public selectFile(event: any) {
    const files: File[] = event.target.files
    for (let file of files) {
      this.filesUpload.push(new FileUploadFireBase(file, this.storage))
    }
  }

  public uploadFile() {
    let typeArray = ['image/gif', 'image/jpeg', 'image/png']
    for(let fileUpload of this.filesUpload){
      fileUpload.checkTypes(typeArray).up()
    }
  }
}
