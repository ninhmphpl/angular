import {Component, OnInit} from '@angular/core';
import {initializeApp} from "firebase/app";
import {getAnalytics, logEvent, setUserProperties, setUserId} from "firebase/analytics";
import {evi} from "./env";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // Initialize Firebase
    const app = initializeApp(evi.firebaseConfig);
    // Initialize Analytics and get a reference to the service
    const analytics = getAnalytics(app);
    logEvent(analytics, 'notification_received');
    this.setUser()
    for(let i = 0; i < 1000; i ++ ){
      this.logEven()
      this.logEven2()
    }

  }
  //Số sự kiện theo Tên sự kiện
  logEven(){
    const analytics = getAnalytics();
    logEvent(analytics, 'select_content', {
      content_type: 'image',
      content_id: 'P12453'
    });
  }
  logEven2(){
    const analytics = getAnalytics();
    logEvent(analytics, 'Type', { name: 'lever_puzzle'});
  }
  //Người dùng theo Thuộc tính người dùng
  setUser(){
    const analytics = getAnalytics();
    setUserProperties(analytics, { favorite_food: 'apples' })
  }

  //Set id cho người dùng
  setIdUser(){
    const analytics = getAnalytics();
    setUserId(analytics, "123456");
  }


}
