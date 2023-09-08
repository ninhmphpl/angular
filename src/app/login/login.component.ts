import {Component} from '@angular/core';
import {Auth, getAuth, GoogleAuthProvider, signInWithPopup} from "@angular/fire/auth";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  HOST = "http://localhost:8080"
  constructor(private auth: Auth, private http : HttpClient) {
  }

  login() {
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    provider.setCustomParameters({
      'login_hint': 'user@example.com'
    });

    signInWithPopup(this.auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (credential) {
          const token = credential.idToken;
          console.log(token)
          this.http.post(this.HOST + "/login", {token : token, })
        }

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
