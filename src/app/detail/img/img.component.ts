import { Component, Input, OnInit } from '@angular/core';
import { Img } from 'src/app/Model/Product';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit{
  @Input() imgs! : Img [];
  public img! : string;
  public imgShow! : string [];
  public first! : number;
  public last! : number;
  
  ngOnInit(): void {
    this.img = this.imgs[0].url;
    this.render(0)
  }

  private render(first : number){
    if(first < 0 && first >= this.imgs.length){
      return
    }
    this.imgShow = []
    for ( let i : number = first ; (this.imgShow.length < 5) && i < (this.imgs.length) ; i++){
      this.imgShow.push(this.imgs[i].url)
    }
    this.first = first;
    if(this.first + 4 < this.imgs.length){
      this.last = this.first + 4
    }else{
      this.last = this.imgs.length - 1
    }
  }
  public changeIMG(img: string) {
    this.img = img
  }

  public next(){
    this.render(++this.first)
  }
  public pree(){
    this.render(--this.first)
  }
}
