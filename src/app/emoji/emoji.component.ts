import {Component, OnInit} from '@angular/core';
import {APIService} from "../service/api.service";
import {form, errorAlert, successAlert} from "../environments";
import Swal from "sweetalert2";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {catchError, throwError} from "rxjs";
import {getDurationFromFile} from "../service/AudioTool";
import {FirebaseService} from "../service/firebase.service";
import {EnvironmentService} from "../service/environment.service";

@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.scss']
})
export class EmojiComponent implements OnInit {
  emojis: any;
  a: any
  option: any;
  environment : any;

  constructor(private api: APIService,
              private router: Router,
              private http: HttpClient,
              private firebaseService: FirebaseService,
              private evi: EnvironmentService) {
  }

  ngOnInit(): void {
    // lấy token
    let token: any = localStorage.getItem("Prox-Token");
    if (!token) {
      this.backLogin()
      return
    }
    // gán token
    this.option = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token
      })
    };
    // lấy biến môi trường và danh sách list
    this.evi.instance((data : any)=>{
      this.environment = data
      this.getList()
      this.firebaseService.connectFirebase();
    })
  }

  /**
   * Lưu dữ liệu vào máy chủ quản lý file
   */
  saveDataUpload(file: File, urlDownload: string, typeName: string, action: any) {
    getDurationFromFile(file, (duration: number) => {
      let object = {
        url: urlDownload,
        duration: duration,
        name: file.name,
        typeName: typeName,
        fileType: file.type,
        size: file.size
      }
      let url = `${this.environment.dataHost}/upload/manager`;
      this.http.post(url, object).pipe(catchError((error: any) => {
          alert(JSON.stringify(error))
          return throwError(() => new Error('Something bad happened; please try again later.(Lỗi không rõ)'))
        })
      ).subscribe((data: any) => {
        action(data)
      })
    })
  }

  /**
   * Lấy danh sách emoji
   */
  getList() {
    let url = this.environment.emojiHost + "/emoji/all"
    this.api.getMapping(url, {}, (data: any) => {
      if (data.code === 200) {
        this.emojis = data.data
      } else if (data.code === 403) {
        this.backLogin()
        return
      } else {
        errorAlert("List Error: " + data.data.name)
      }

    })
  }

  /**
   * lưu cập nhật thông tin danh đối tượng Emoji
   */
  saveUpdate(emoji: any, action? : any) {
    let url = this.environment.emojiHost + "/emoji"
    this.api.putMapping(url, emoji, this.option, (data: any) => {
      if (data.code === 200) {
        if(action){
          action(data.data)
        }
        this.getList()
      } else if (data.code === 403) {
        this.backLogin()
        return
      } else {
        errorAlert("Update error: " + data.data.name)
      }
    })
  }

  /**
   * Lưu đối tượng vừa tạo lên máy chủ
   * @param emoji
   */
  saveCreate(emoji: any) {
    let url = this.environment.emojiHost + "/emoji"
    this.api.postMapping(url, emoji, this.option, (data: any) => {
        if (data.code === 200) {
          successAlert("Create complete")
          this.getList()
        } else if (data.code === 403) {
          this.backLogin()
          return
        } else {
          errorAlert("Create Error: " + data.data.name)
        }
      }
    )
  }

  /**
   * Xóa đối tượng emoji
   */
  deleteById(id: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        let url = this.environment.emojiHost + "/emoji/" + id
        this.api.deleteMapping(url, this.option, (data: any) => {
          if (data.code === 200) {
            this.getList()
            successAlert("Delete Complete")
          } else if (data.code === 403) {
            this.backLogin()
            return
          } else {
            errorAlert("Delete Error: " + data.data.name)
          }
        })
      }
    })
  }
  /**
   * Lưu cập nhật thumbnail
   */
  upThumb(i: number, event: any) {
    this.emojis[i].avatarUpload = true;
    let url = this.environment.emojiHost + "/upload"
    let formData: FormData = new FormData();
    formData.append("files", event.target.files[0])
    this.api.postMapping(url, formData, this.api.headerFromData(), (data: any) => {
      if (data.code === 200) {
        this.emojis[i].thumbnail = this.environment.emojiHost + data.data[0]
        successAlert("Upload Complete")
      } else if (data.code === 403) {
        this.backLogin()
        return
      } else {
        errorAlert("Upload Error: " + data.data.name)
      }
      this.emojis[i].avatarUpload = false;
    })
  }

  /**
   * Lưu cập nhật thumbnail 2
   */
  upThumb2(event : any, i: number) {
    let file : File = event.target.files[0];
    // lấy url sau khi upload
    this.firebaseService.getUrlAfterUpload(file, (downloadURL: any) => {
      // Sửa lại thông tin tại giao diện
      this.emojis[i].thumbnail = downloadURL;
      // Lưu thông tin vào máy chủ emoji
      this.http.put(`${this.environment.emojiHost}/emoji`, this.emojis[i], this.option).subscribe((data: any) => {
        if(data.code === 200){
          this.emojis[i] = data.data;
          // lưu thông tin file vào máy chủ quản lý file
          this.saveDataUpload(file, downloadURL, "Emoji Thumb", (data: any) => {
            console.log(data)
            successAlert("Update Thumbnail Complete")
          })
        }else{
          errorAlert("Something Error")
        }
      })
    })
  }


  upVideo(i: number, event: any) {
    this.emojis[i].videoUpload = true;
    let url = this.environment.emojiHost + "/upload"
    let formData: FormData = new FormData();
    formData.append("files", event.target.files[0])
    this.api.postMapping(url, formData, this.api.headerFromData(), (data: any) => {
      if (data.code === 200) {
        this.emojis[i].linkVideo = this.environment.emojiHost + data.data[0]
        successAlert("Upload Complete")
      } else if (data.code === 403) {
        this.backLogin()
        return
      } else {
        errorAlert("Upload Error: " + data.data.name)
      }
      this.emojis[i].videoUpload = false;
    })
  }

  /**
   * Tải video lên mạng
   */
  upVideo2(event : any, i : number){
    let file : File = event.target.files[0];
    this.firebaseService.getUrlAfterUpload(file,(urlDownload : any)=>{
      this.emojis[i].linkVideo = urlDownload;
      // Lưu vào máy chủ emoji
      this.saveUpdate(this.emojis[i], (data : any)=>{
        // Cập nhật lại đối tượng vừa thay đổi
        this.emojis[i] = data
        // Lưu vào máy chủ quản lý file
        this.saveDataUpload(file, urlDownload, "Emoji Video", (data: any) => {
          console.log(data)
          successAlert("Update Thumbnail Complete")
        })

      })

    })

  }

  /**
   * Tạo form thêm mới đối tượng emoji
   */
  add() {
    this.emojis.push(JSON.parse(form.emojiJson))
  }

  /**
   * Hủy bỏ form thêm mới đối tượng emoji
   */
  cancel(index: number) {
    this.emojis.splice(index, 1)
  }

  /**
   * Chuyển hướng về trang login
   */
  backLogin() {
    this.router.navigate(["/login"])
  }
}
