import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../Environment";
import {Auth, GoogleAuthProvider, signInWithPopup} from "@angular/fire/auth";

const url = environment.url
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  email = "";
  password = "";

  constructor(private http: HttpClient, private auth: Auth, private router : Router) {
  }

  ngOnInit(): void {
    localStorage.removeItem(environment.keySaveToken)
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

}
