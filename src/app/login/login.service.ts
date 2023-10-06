import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "./User";
import {Router} from "@angular/router";
import {Auth, GoogleAuthProvider, signInWithPopup} from "@angular/fire/auth";
import {environment} from "../../../environment/environments";
const url = environment.url
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private auth: Auth, private router : Router, private http : HttpClient) { }
  getUser(user : (user : User)=> any, errorAction : (error : any)=> any){
    this.http.get(url + "/security/user-info", this.getHeader()).subscribe((value:any) => {
      user(value.data)
    }, error => {
      errorAction(error)
    })
  }

  getListUser(listUser : (listUser : User[])=> any){
    this.http.get(url + "/security/user-list",this.getHeader()).subscribe((value : any) => {
      if(value.code == 200) listUser(value.data)
    }, error => {
      alert(error.error.detail)
    })
  }
  saveUser(user : User, userResult : (user : User)=> any){
    this.http.post(url + `/security/save-user`,user,this.getHeader()).subscribe((value : any) => {
      if(value.code == 200) userResult(value.data)
    }, error => {
      alert(error.error.detail)
    })
  }
  deleteUser(user : User, action : ()=> any){
    this.http.post(url + `/security/delete-user?email=${user.email}`,{},this.getHeader()).subscribe((value : any) => {
      if(value.code == 200) action()
    }, error => {
      alert(error.error.detail)
    })
  }

  loginBase(email : string, password : string, action : ()=> any) {
    this.http.post(url + "/security/login", {email : email, password : password}).subscribe((payload : any)=>{
      if(payload.code === 200) localStorage.setItem(environment.keySaveToken, payload.data)
      console.log("Login Success")
      action()
    }, (error : any)=>{
      console.log(error)
      alert(error.error.detail)
    })
  }

  loginEmailGoogle(action : ()=> any) {
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    provider.setCustomParameters({
      'login_hint': 'user@example.com'
    });

    signInWithPopup(this.auth, provider)
      .then((result) => {
        this.auth.currentUser?.getIdToken(/* forceRefresh */ true).then((idToken) => {
          this.http.post(url + "/security/login-email",{tokenId : idToken}).subscribe((value : any) => {
            localStorage.setItem(environment.keySaveToken, value.data)
            action()
          }, error => {
            console.log(error)
            alert(error.error.detail)
          })
        }).catch((error) => {
          console.log(error)
        });
        const user = result.user;
        console.log(user)
      }).catch((error) => {
      console.log(error)
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(credential)
    });
  }
  getHeader(){
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem(environment.keySaveToken)??""
      })
    };
  }
}
