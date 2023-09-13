import {Component, OnInit} from '@angular/core';
import {PaintingService} from "../painting.service";
import {Painting} from "../model/painting";

@Component({
  selector: 'app-painting',
  templateUrl: './painting.component.html',
  styleUrls: ['./painting.component.scss']
})
export class PaintingComponent implements OnInit{
  type = "BANNER"
  pain : Painting[] = []
  constructor(public painting : PaintingService) {
  }
  ngOnInit(): void {
    this.painting.get(pain1 => this.pain = pain1.banner)
  }


}
