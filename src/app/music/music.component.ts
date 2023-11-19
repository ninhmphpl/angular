import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit{
  constructor(public api : ApiService) {
  }
  ngOnInit(): void {
    this.api.getMusic()
  }

}
