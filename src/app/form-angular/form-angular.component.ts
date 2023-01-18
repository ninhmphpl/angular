import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-angular',
  templateUrl: './form-angular.component.html',
  styleUrls: ['./form-angular.component.scss']
})
export class FormAngularComponent implements OnInit{
  ngOnInit(): void {
    
  }

  public ex1 = `
  import { FormsModule } from '@angular/forms';
  @NgModule({
    declarations: [...],
    imports: [
      ...,
      FormsModule
    ],
    providers: [...],
    bootstrap: [...]
  })
  export class AppModule { }`
  public ex2 = `
  <form
  autocomplete="off"
  #bookForm="ngForm"
  >
  </form>`
  public ex3 = `
  // *.component.ts
  book = {name: '123', year: 1993, stars: null};`
  public book = {name: '123', year: 1993, stars: null};
  public ex4 = `
  <input name="name" required minlength="3" [(ngModel)]="book.name" type="text" class="form-control">
`


}
