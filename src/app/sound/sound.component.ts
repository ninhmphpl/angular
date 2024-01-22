import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-sound',
  templateUrl: './sound.component.html',
  styleUrls: ['./sound.component.scss']
})
export class SoundComponent implements OnInit{
  constructor(public api : ApiService) {
  }
  ngOnInit(): void {
    this.api.getSound()
  }

}
