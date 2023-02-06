import { Injectable } from '@angular/core';
import { Category } from '../model/model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends ApiService<Category>{


}
