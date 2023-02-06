import { Component } from '@angular/core';
import { Tour } from './model/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tours : Tour[] = []

  
}
