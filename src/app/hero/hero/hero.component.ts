import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit{
  private heros: Hero[] | undefined;

  constructor(private sevice : HeroService){}

  ngOnInit(): void {
    this.sevice.findAll()
    .subscribe((data: Hero[]) => {
      this.heros = { ...data }
      console.log(this.heros);
    })
  }

}
