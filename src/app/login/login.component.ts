import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Auth, GoogleAuthProvider, signInWithPopup} from "@angular/fire/auth";
import {User} from "./User";
import {LoginService} from "./login.service";
import {environment} from "../../../environment/environments";

const url = environment.url
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  userInfo : User | null = null;
  createUser : User = new User();
  email = "";
  password = "";
  users : User[] = []

  constructor(private http: HttpClient, private auth: Auth, private router : Router, private loginService : LoginService) {
  }

  ngOnInit(): void {
    // localStorage.removeItem(environment.keySaveToken)
    this.getUserInfo()
  }
  getUserInfo(){
    this.loginService.getUser(user => {
      this.userInfo = user
    }, error => {
      this.userInfo = null
    })
  }

  getListUser(){
    this.loginService.getListUser(listUser => this.users = listUser)
  }
  addUser(){
    this.loginService.saveUser(this.createUser, user => {
      this.users.push(user)
    })
  }
  saveUser(i : number){
    this.loginService.saveUser(this.users[i], user => {
      this.users[i] = user
    })
  }
  deleteUser(i : number){
    this.loginService.deleteUser(this.users[i], () =>{
      this.users.splice(i, 1)
    })
  }

  loginBase() {
    this.loginService.loginBase(this.email, this.password, () => {
      this.getUserInfo()
    })
  }

  loginEmailGoogle() {
    this.loginService.loginEmailGoogle(() => {
      this.getUserInfo()
    })
  }

  logout(){
    this.userInfo = null;
    localStorage.removeItem(environment.keySaveToken)
  }


}
