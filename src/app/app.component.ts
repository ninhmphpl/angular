import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, throwError} from "rxjs";
import {initializeApp} from "firebase/app";
import {getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject} from "firebase/storage";
import {getDurationFromFile} from "./ToolAudio";
import {log} from "./Log";
import {uploadFile} from "../lib/upload.socket";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  host = ""
  version = ""
  firebaseConfig: any;
  log: any;
  server: string = "server"

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
      this.configFirebase(data.firebaseConfig);
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

  configFirebase(config: any) {
    const app = initializeApp(config);
    getStorage(app)

  }

  uploadFile(event: any, typeName: string) {
    let files: File[] = event.target.files
    for (let file of files) {
      if (this.server === "server") this.uploadServer(file, typeName)
      if (this.server === "firebase") this.uploadFirebase(file, typeName)
    }
  }

  private uploadServer(file: File, typeName: string) {
    let url = `ws://${this.host}/upload`
    uploadFile(file, url, typeName, (urlDownload: string) => {
      this.createFile(file, urlDownload, typeName)
    })
  }

  private uploadFirebase(file: File, typeName: string) {
    const storage = getStorage();
    const storageRef = ref(storage, file.name);

    const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
    uploadTask.on('state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress: number = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + Math.round(progress) + '%');
        this.log = log(Math.round(progress), file.name)
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          this.createFile(file, downloadURL, typeName)
        });
      }
    );
  }

  // create file on server data
  createFile(file: File, urlDownload: string, typeName: string) {
    getDurationFromFile(file, (duration: number) => {
      let object = {
        url: urlDownload,
        duration: duration,
        name: file.name,
        typeName: typeName,
        fileType: file.type,
        size: file.size
      }
      let url = `http://${this.host}/upload/manager`;
      this.http.post(url, object).pipe(catchError((error: any) => {
          alert(JSON.stringify(error))
          return throwError(() => new Error('Something bad happened; please try again later.(Lỗi không rõ)'))
        })
      ).subscribe((data: any) => {
        data.status = true;
        this.fileData.push(data)
      })
    })
  }

  delete(url: string, id: number) {
    //https://firebasestorage.googleapis.com/v0/b/prox-data.appspot.com/o/UngQuaChung-AMEE-8783624%20-%20Copy%20(2).mp3?alt=media&token=1dd29cae-552a-49ef-8a1c-c6f1c2549d63
    url = url.replace("https://firebasestorage.googleapis.com/v0/b/prox-data.appspot.com/o/", "");
    url = url.substring(0, url.indexOf("?alt"));
    url = decodeURIComponent(url);
    console.log(url)
    this.firebaseDelete(url, () => {
      this.serverDelete(id)
    })
  }

  // delete file on firebase server
  firebaseDelete(objectName: string, action: any) {
    const storage = getStorage();

    // Create a reference to the file to delete
    const desertRef = ref(storage, objectName);

    // Delete the file
    deleteObject(desertRef).then(() => {
      action()
    }).catch((error: any) => {
      // Uh-oh, an error occurred!
      let conf = confirm("File not found on Firebase, do you want continue delete ?")
      if (conf) {
        action()
      }
    });
  }

  serverDelete(id: number) {
    let url = `http://${this.host}/upload/manager/` + id;
    this.http.delete(url).pipe(catchError((error: any) => {
      alert(JSON.stringify(error))
      return throwError(() => new Error('Something bad happened; please try again later.(Lỗi không rõ)'))
    })).subscribe((data: any) => {
      alert("Deleted")
      for (let i = 0; i < this.fileData.length; i++) {
        if (this.fileData[i].id === id) {
          this.fileData.splice(i, 1);
          return;
        }
      }
    })
  }


}
