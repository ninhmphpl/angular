import {Component, OnInit} from '@angular/core';
import {deleteAlert, environment, errorAlert, successAlert} from "../../../environment/environments";
import {HttpClient} from "@angular/common/http";
import {CallIcon} from "../../model/CallIcon";
import {uploadFile} from "../../../environment/upload.socket";
import {TypeService} from "../type.service";
import {Type} from "../../model/Type";
const url = environment.url
const urlUploadFile = environment.url.replace("http", "ws") + '/upload'
@Component({
  selector: 'app-call-icon',
  templateUrl: './call-icon.component.html',
  styleUrls: ['./call-icon.component.scss']
})
export class CallIconComponent implements OnInit{
  crateForm : CallIcon = {
    id : null,
    accept : null,
    deny : null,
    acceptJson : null,
    denyJson : null,
    type : null,
  }
  callIcons : CallIcon[] = []
  constructor(private http: HttpClient, public typeService : TypeService) {
  }
  ngOnInit(): void {
    this.typeService.getType()
    this.getList()
  }
  getList(){
    this.http.get(url + "/callicon").subscribe((payload : any)=>{
      if(payload.code == 200){
        this.callIcons = payload.data
      }else {
        errorAlert("Error code : " + payload.code)
      }
    }, (error : any)=>{
      errorAlert( JSON.stringify(error) )
    })
  }

  save(index : number | null){
    this.http.post(url + "/callicon", (index != null) ? this.callIcons[index] : this.crateForm).subscribe((payload : any)=>{
      if(payload.code == 200){
        if(index != null){
          this.callIcons[index] = payload.data
        }else {
          this.callIcons.unshift(payload.data)
        }
        successAlert("OK")
      }else {
        errorAlert("Error code : " + payload.code)
      }
    }, (error : any)=>{
      errorAlert(JSON.stringify(error))
    })
  }
  delete(index : number){
    deleteAlert(()=>{
      this.http.delete(url + "/callicon/" + this.callIcons[index].id).subscribe((payload : any)=>{
        if(payload.code === 200){
          this.callIcons.splice(index,1)
        }else {
          errorAlert("Error code : " + payload.code)
        }
      }, (error : any)=>{
        errorAlert(JSON.stringify(error))
      })
    })
  }
  upload(files : FileList | null, action : (value : string) => any){
    if(files && files.length > 0)
    uploadFile(files[0], urlUploadFile, "", (urlDownload: any)=>{
      action(urlDownload)
    })
  }
  uploadAccept(files : FileList | null,index : number){
    this.upload(files, url =>{
      this.callIcons[index].accept = url
      this.save(index)
    })
  }
  uploadDeny(files : FileList | null,index : number){
    this.upload(files, url=>{
      this.callIcons[index].deny = url
      this.save(index)
    })
  }
  uploadAcceptJson(files : FileList | null,index : number){
    this.upload(files, url=>{
      this.callIcons[index].acceptJson = url
      this.save(index)
    })
  }
  uploadDenyJson(files : FileList | null,index : number){
    this.upload(files, url=>{
      this.callIcons[index].denyJson = url
      this.save(index)
    })
  }
}
