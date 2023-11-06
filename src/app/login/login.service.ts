import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "./User";
import {Router} from "@angular/router";
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {environment} from "../environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userInfo : User | null = null;
  constructor(private http : HttpClient) { }
  getUser(){
    this.http.get(environment.url + "/security/user-info", this.getHeader()).subscribe((value:any) => {
      this.userInfo = value.data
    }, error => {
      this.userInfo = null
    })
  }

  getListUser(listUser : (listUser : User[])=> any){
    this.http.get(environment.url + "/security/user-list",this.getHeader()).subscribe((value : any) => {
      if(value.code == 200) listUser(value.data)
    }, error => {
      alert(error.error.detail)
    })
  }
  saveUser(user : User, userResult : (user : User)=> any){
    this.http.post(environment.url + `/security/save-user`,user,this.getHeader()).subscribe((value : any) => {
      if(value.code == 200) userResult(value.data)
    }, error => {
      alert(error.error.detail)
    })
  }
  deleteUser(user : User, action : ()=> any){
    this.http.post(environment.url + `/security/delete-user?email=${user.email}`,{},this.getHeader()).subscribe((value : any) => {
      if(value.code == 200) action()
    }, error => {
      alert(error.error.detail)
    })
  }

  loginBase(email : string, password : string, action : ()=> any) {
    this.http.post(environment.url + "/public/login", {email : email, password : password}).subscribe((payload : any)=>{
      if(payload.code === 200) localStorage.setItem(environment.keySaveToken, payload.data)
      console.log("Login Success")
      action()
    }, (error : any)=>{
      console.log(error)
      alert(error.error.detail)
    })
  }

  loginEmailGoogle(action : ()=> any) {
    this.http.get(environment.url + "/public/firebase-client").subscribe((value : any) => {
      const app = initializeApp(value);
      let auth = getAuth(app)
      const provider = new GoogleAuthProvider();
      // provider.addScope('https://www.googleapis.com/auth/cloud-platform.read-only');
      provider.setCustomParameters({
        'login_hint': 'user@example.com'
      });
      signInWithPopup(auth, provider)
        .then((result) => {
          auth.currentUser?.getIdToken(/* forceRefresh */ true).then((idToken) => {
            this.http.post(environment.url + "/public/login-email",{tokenId : idToken}).subscribe((value : any) => {
              localStorage.setItem(environment.keySaveToken, value.data)
              action()
            }, error => {
              alert(error.error.detail)
            })
          }).catch((error) => {
            console.log(error)
          });
          const user = result.user;
        }).catch((error) => {
        console.log(error)
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential)
      });
    }, error => {
      alert(error.error.detail)
    })
  }
  getHeader(){
    return {
      headers: new HttpHeaders({
        // 'Content-Type': 'application/json',
        'Authorization': localStorage.getItem(environment.keySaveToken)??""
      })
    };
  }
  getHeaderFormData(){
    return {
      headers: new HttpHeaders({
        // 'Content-Type': 'multipart/form-data',
        'Authorization': localStorage.getItem(environment.keySaveToken)??""
      })
    };
  }
}
