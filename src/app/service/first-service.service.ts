import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {
  public hero : string[] = ['inron man', 'captal america', 'ain man', 'spider man']
  constructor() {}
  
  public getHero(index : number) : string {
    return this.hero[index]
  }
  
}
