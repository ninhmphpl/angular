import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-percen',
  templateUrl: './star-percen.component.html',
  styleUrls: ['./star-percen.component.scss']
})
export class StarPercenComponent implements OnInit{
  @Input() star : number = 0;
  public wit : number | undefined ;
  public style : Record<string,string> = {};
  public styleRate : Record<string,string> = {};
  ngOnInit(): void {
    this.wit = document.getElementById('star')?.offsetWidth
    console.log(this.wit);
    this.style = {
      'width' : this.wit + 'px'
    }
    this.styleRate = {
      'width' : (this.star/5*100) + '%'
    }
  }
}
