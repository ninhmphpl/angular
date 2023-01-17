import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent {
  public item:string = "Fist comonent";
  public items:string[] = []
  public ex1 = `<app-output (newItemOutput)="addItem($event)"></app-output>`
  public ex2 = `
  @Output() newItemOutput = new EventEmitter<string>();
  addNewItem(value: string) {
    console.log(value);
    this.newItemOutput.emit(value);
}
`
  public ex3 = `
  public items:string[] = []
  public addItem(item: string) :void {
    this.items.push(item)
  }
  `
  public addItem(item: string) :void {
    this.items.push(item)
  }
  
}
