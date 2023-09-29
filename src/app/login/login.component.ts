import {Component, OnInit} from '@angular/core';
import {Auth, getAuth, GoogleAuthProvider, signInWithPopup} from "@angular/fire/auth";
import {Project} from "../../model/Project";
import {ApiService} from "../api.service";
import {LoginInfo} from "../../model/LoginInfo";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  projectList: Project[] = []
  loginInfo: LoginInfo = new LoginInfo();

  constructor(private auth: Auth, private api: ApiService, private router : Router) {
  }

  ngOnInit(): void {
    this.api.getListProject(project => this.projectList = project)
  }

  login() {
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    provider.setCustomParameters({
      'login_hint': 'user@example.com'
    });

    signInWithPopup(this.auth, provider)
      .then((result) => {
        this.auth.currentUser?.getIdToken(/* forceRefresh */ true).then((idToken) => {
          this.loginInfo.tokenId = idToken;
          this.api.login(this.loginInfo, loginResult =>{
            console.log(loginResult)
            localStorage.setItem(environment.tokensStorage, loginResult.token)
            this.router.navigate([loginResult.redirect])
          })
        }).catch((error) => {
          // Handle error
        });
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // if (credential) {
        // if(credential.idToken) this.loginInfo.tokenId = credential.idToken;
        // this.api.login(this.loginInfo, loginResult => console.log(loginResult))
        // }
        // The signed-in user info.
        const user = result.user;
        console.log(user)
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        console.log(error)
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential)
      // ...
    });
  }


}
