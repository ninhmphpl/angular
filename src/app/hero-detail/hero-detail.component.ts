import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Hero } from '../heroes/Hero';
import { HeroesService } from '../heroes/heroes.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent {
  public hero$?:Observable<Hero>;

  constructor(
    private router:Router, 
    private activatedRoute: ActivatedRoute,
    private service: HeroesService
  ){}


  ngOnInit() {
    this.hero$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getHero(params.get('id')!))
    );
  }



}
