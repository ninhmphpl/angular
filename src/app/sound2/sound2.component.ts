import {Component, OnInit} from '@angular/core';
import {APIService} from "../service/api.service";
import {deleteAlert, form, errorAlert, successAlert} from "../environments";
import {HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {EnvironmentService} from "../service/environment.service";

@Component({
  selector: 'app-sound2',
  templateUrl: './sound2.component.html',
  styleUrls: ['./sound2.component.scss']
})
export class Sound2Component implements OnInit{
  sounds : any;
  option : any;
  environment : any
  constructor(private api : APIService,
              private router : Router,
              private evi : EnvironmentService) {
  }

  ngOnInit() {
    let token : any = localStorage.getItem("Prox-Token")
    if (!token){
      this.backLogin()
      return
    } else {
      this.option = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          Authorization: token
        })
      };
      this.evi.instance((data : any)=>{
        this.environment = data;
        this.getList();
      })
    }
  }

  getList(){
    let url = this.environment.emojiHost + "/sound2/all"
    this.api.getMapping(url,this.option, (data : any)=>{
      if(data.code === 200){
        this.sounds = data.data
        setTimeout(()=>{this.setListenAudio()},100)
      } else if (data.code === 403) {
        this.backLogin()
        return
      }else errorAlert("List Error: " + data.data.name)
    })
  }

  add(i : any){
    let url = this.environment.emojiHost + "/sound2"
    this.api.postMapping(url, this.sounds[i],this.option, (data : any)=>{
      if(data.code === 200){
        this.sounds[i] = data.data
        successAlert("Add complete")
      } else if (data.code === 403) {
        this.backLogin()
        return
      }else{
        errorAlert("Add Error: " + data.data.name)
      }
    })
  }

  cancel(i:number){
    this.sounds.splice(i,1)
  }

  update(i : number){
    let url = this.environment.emojiHost + "/sound2"
    this.api.putMapping(url, this.sounds[i],this.option, (data : any )=>{
      if(data.code === 200){
        this.sounds[i] = data.data
        successAlert("Update Complete")
      } else if (data.code === 403) {
        this.backLogin()
        return
      }else{
        errorAlert("Update Error: " + data.data.name)
      }
    })
  }

  deleteById(i : number){
    deleteAlert(()=>{
      let url = this.environment.emojiHost + "/sound2/" + this.sounds[i].id
      this.api.deleteMapping(url,this.option, (data : any)=>{
        if(data.code === 200){
          this.sounds.splice(i,1)
          successAlert("Delete Complete")
          setTimeout(this.setListenAudio,100)
        } else if (data.code === 403) {
        this.backLogin()
        return
      }else{
          errorAlert("Delete Error: " + data.data.name)
        }
      })
    })

  }

  setListenAudio(){
    let elements = document.querySelectorAll('audio');
    // Lặp qua tất cả các thẻ và thêm sự kiện "click"
    for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener('play', function(event: any) {
        console.log(event)
        // Gọi hàm của bạn ở đây
        let index = Array.prototype.indexOf.call(elements, event.target);
        myFunction(index);
      });
    }

    // Định nghĩa hàm của bạn
    function myFunction(index : any) {
      console.log(index)
      let elements : any = document.querySelectorAll("audio")
      for(let i = 0 ; i < elements.length ; i ++){
        if(i !== index){
          elements[i].pause()
        }
      }
    }
  }

  upSound(i : number, event : any){
    console.log(event.files)
    let url = this.environment.emojiHost + "/upload"
    let formData : FormData = new FormData();
    formData.append("files", event.target.files[0])
    this.api.postMapping(url, formData,this.option, (data : any)=>{
      if(data.code === 200){
        this.sounds[i].sound = this.environment.emojiHost + data.data[0]
        successAlert("Upload Complete")
      } else if (data.code === 403) {
        this.backLogin()
        return
      }else{
        errorAlert("Upload Error: " + data.data.name)
      }
    })
  }

  upThumb(i : number, event : any){
    let url = this.environment.emojiHost + "/upload"
    let formData : FormData = new FormData();
    formData.append("files", event.target.files[0])
    this.api.postMapping(url, formData,this.option, (data : any)=>{
      if(data.code === 200){
        this.sounds[i].thumb = this.environment.emojiHost + data.data[0]
        successAlert("Upload Complete")
      } else if (data.code === 403) {
        this.backLogin()
        return
      }else{
        errorAlert("Upload Error: " + data.data.name)
      }
    })
  }

  create(){
    this.sounds.push(JSON.parse(form.sound2Json))
    setTimeout(this.setListenAudio,100)
  }

  backLogin() {
    this.router.navigate(["/login"])
  }



}
