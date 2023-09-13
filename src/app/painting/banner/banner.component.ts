import {Component, OnInit} from '@angular/core';
import {PaintingService} from "../../painting.service";
import {Painting} from "../../model/painting";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit{
  constructor(public painting : PaintingService) {
  }
  ngOnInit(): void {
    this.painting.get()
  }
  create(){
    let pain = new Painting()
    pain.type = "BANNER"
    this.painting.savePain(pain, pain1 => this.painting.banner.unshift(pain1))
  }
  save(i : number){
    this.painting.savePain(this.painting.banner[i], pain => this.painting.banner[i] = pain)
  }
  delete(i : number){
    this.painting.deletePain(this.painting.banner[i].id, () => this.painting.banner.splice(i, 1))
  }

}
