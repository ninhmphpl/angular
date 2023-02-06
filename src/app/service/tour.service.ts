import { Injectable } from '@angular/core';
import { Tour } from '../model/model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TourService extends ApiService<Tour>{

}
