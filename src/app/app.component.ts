import { Component } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { UploadTaskSnapshot } from '@angular/fire/compat/storage/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private storage: AngularFireStorage) { }
  public status: any;

  public upload(event: any) {
    const file: File | null = event.target.files[0]
    if (file) {
      const filePath = file.name;
      const task = this.storage.upload(filePath, file);
      // this.status = task.snapshotChanges().subscribe()
    }
  }
}
