import { Component } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'source';
  ipAddress = '';
  
  constructor(private http:HttpClient) { }
  
  ngOnInit() {
      this.getIPAddress();
  }
  
  getIPAddress()
  {
    this.http.get("https://jsonip.com/").subscribe((res:any)=>{
      console.log(res);
      this.ipAddress = res.ip;
    });
  }
  
}
