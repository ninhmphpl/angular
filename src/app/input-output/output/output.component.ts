import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {
  @Output() newItemOutput = new EventEmitter<string>();
  addNewItem(value: string) {
    console.log(value);
    this.newItemOutput.emit(value);
  }
  public ex1 = `<label for="item-input">Add an item:</label>
<input type="text" id="item-input" #newItem>
<button type="button" (click)="addNewItem(newItem.value)">Add to parent's list</button>`
}
