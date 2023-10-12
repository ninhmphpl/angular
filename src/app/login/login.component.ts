import {Component, OnInit} from '@angular/core';
import {User} from "./User";
import {LoginService} from "./login.service";
import {environment} from "../../environment/environments";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  createUser : User = new User();
  email = "";
  password = "";
  users : User[] = []

  constructor(public loginService : LoginService) {
  }

  ngOnInit(): void {
    // localStorage.removeItem(environment.keySaveToken)
    this.getUserInfo()
  }
  getUserInfo(){
    this.loginService.getUser()
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
    this.loginService.userInfo = null
    localStorage.removeItem(environment.keySaveToken)
  }


}
