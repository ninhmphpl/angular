import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  public user : any;
  public messager: string = ""
  constructor (private fb : FormBuilder){}

  public userForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(32)]],
    remember: false
  })

  public onSubmit(){
    if(!this.userForm.invalid){
      this.user = this.userForm.value
      console.log(this.user); 
    }else{
      this.messager = 'Something went wrong'
    }
  }


}
