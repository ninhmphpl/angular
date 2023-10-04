import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../Environment";
import {Auth, GoogleAuthProvider, signInWithPopup} from "@angular/fire/auth";
import {User} from "./User";

const url = environment.url
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  crateUser : User = new User();
  email = "";
  password = "";
  users : User[] = []

  constructor(private http: HttpClient, private auth: Auth, private router : Router) {
  }

  ngOnInit(): void {
    // localStorage.removeItem(environment.keySaveToken)
  }

  getListUser(){
    this.http.get(environment.url + "/security/user-list",this.getHeader()).subscribe((value : any) => {
      if(value.code == 200) this.users = value.data
    }, error => {
      alert(error.error.detail)
    })
  }
  addUser(){
    this.http.post(environment.url + `/security/save-user`,this.crateUser,this.getHeader()).subscribe((value : any) => {
      if(value.code == 200) this.users.push(value.data)
    }, error => {
      alert(error.error.detail)
    })
  }
  saveUser(i : number){
    this.http.post(environment.url + `/security/save-user`,this.users[i],this.getHeader()).subscribe((value : any) => {
      if(value.code == 200) this.users[i] = value.data
    }, error => {
      alert(error.error.detail)
    })
  }
  deleteUser(i : number){
    this.http.post(environment.url + `/security/delete-user?email=${this.users[i].email}`,{},this.getHeader()).subscribe((value : any) => {
      if(value.code == 200) this.users.splice(i, 1)
    }, error => {
      alert(error.error.detail)
    })
  }

  loginBase() {
    this.http.post(url + "/security/login", {email : this.email, password : this.password}).subscribe((payload : any)=>{
      if(payload.code === 200) localStorage.setItem(environment.keySaveToken, payload.data)
      console.log("Login Success")
      this.router.navigate(["/video"])
    }, (error : any)=>{
      console.log(error)
      alert(error.error.detail)
    })
  }

  loginEmailGoogle() {
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    provider.setCustomParameters({
      'login_hint': 'user@example.com'
    });

    signInWithPopup(this.auth, provider)
      .then((result) => {
        this.auth.currentUser?.getIdToken(/* forceRefresh */ true).then((idToken) => {
          this.http.post(environment.url + "/security/login-email",{tokenId : idToken}).subscribe((value : any) => {
            localStorage.setItem(environment.keySaveToken, value.data)
            this.router.navigate(["/video"])
          }, error => {
            console.log(error)
            alert(error.error.detail)
          })
        }).catch((error) => {
          // Handle error
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
