import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.scss']
})
export class ValidateComponent implements OnInit{
  ngOnInit(): void {
    console.log(this.profileForm);
  }
  public profileForm : FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  public onSubmit() : void {
      console.log(this.profileForm); 
  }

}
