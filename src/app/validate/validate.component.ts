import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.scss']
})
export class ValidateComponent implements OnInit {
  ngOnInit(): void {

  }
  // public profileForm : FormGroup = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  // });

  constructor(private formBuilder: FormBuilder) { }

  public onSubmit(): void {    
  }
  public profileForm = this.formBuilder.group({
    name: ['', [ Validators.minLength(4),Validators.required]],
    password: ['', [Validators.minLength(6),Validators.required]]
  })

}

