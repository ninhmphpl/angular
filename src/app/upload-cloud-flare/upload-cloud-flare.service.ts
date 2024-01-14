import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

const uploadUrl = 'http://s3.heratech.space/cloudflare/upload-file';
const params = {
  folder: '',
  bucket: 'ai-art-2',
  domain: 'http://ai-art-2.proxglobal.co/'
};
@Injectable({
  providedIn: 'root'
})
export class UploadCloudFlareService {

  constructor(private http : HttpClient) { }

  upload (file : any, data : (url : string)=> any){
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post(uploadUrl, formData, {
      params: params,
      responseType: 'text'
    }).subscribe((value : any) => {
      data(value)
    }, error => alert(error.error));
  }
}
