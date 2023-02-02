import { Component } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { UploadTaskSnapshot } from '@angular/fire/compat/storage/interfaces';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private storage: AngularFireStorage) { }
  public status: any;
  public path! : string;
  public perstion! : number;

  public upload(event: any) {
    const file: File | null = event.target.files[0]
    if (file) {
      const filePath = file.name;
      const fileRef : AngularFireStorageReference = this.storage.ref(filePath);

      fileRef.getDownloadURL().subscribe(url => console.log(url)
      );
      
      const task : AngularFireUploadTask = this.storage.upload(filePath, file);
      task.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            this.path = url
            console.log(url);            
          });
        })
      ).subscribe()
      task.percentageChanges().subscribe((per : number | undefined) => {if(per) this.perstion = per})
    }
  }
}
