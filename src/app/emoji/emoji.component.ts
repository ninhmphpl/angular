import {Component, OnInit} from '@angular/core';
import {APIService} from "../service/api.service";
import {form, errorAlert, successAlert} from "../environments";
import Swal from "sweetalert2";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
import {EnvironmentService} from "../environment.service";
import {uploadFile} from "../../lib/upload.socket";

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
    })
  }

  /**
   * Lấy danh sách emoji
   */
  getList() {
    let url = this.environment.emojiHost + "/emoji/all"
    let token : any = localStorage.getItem("Prox-Token");
    let option = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: new HttpParams().append("token", token)
    }
    this.api.getMapping(url, option, (data: any) => {
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
        successAlert("OK")
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
   * Lưu cập nhật thumbnail 2
   */
  upThumb2(event : any, i: number) {
    let file : File = event.target.files[0];
    let urlDataServer = this.environment.dataHost + "/upload";
    // lấy url sau khi upload
    uploadFile(file, urlDataServer, "thumbnail-emoji",(downloadURL: string) => {
      // Sửa lại thông tin tại giao diện
      this.emojis[i].thumbnail = downloadURL;
      // Lưu thông tin vào máy chủ emoji
      this.http.put(`${this.environment.emojiHost}/emoji`, this.emojis[i], this.option).subscribe((data: any) => {
        if(data.code === 200){
          this.emojis[i] = data.data;
          successAlert("Ok")
        }else{
          errorAlert("Something Error")
        }
      })
    })
  }
  /**
   * Tải video lên mạng
   */
  upVideo2(event : any, i : number){
    let file : File = event.target.files[0];
    let urlDataServer = this.environment.dataHost + "/upload";
    uploadFile(file,urlDataServer, "video-emoji",(urlDownload : any)=>{
      this.emojis[i].linkVideo = urlDownload;
      // Lưu vào máy chủ emoji
      this.saveUpdate(this.emojis[i], (data : any)=>{
        // Cập nhật lại đối tượng vừa thay đổi
        this.emojis[i] = data
        successAlert("OK")
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
