import { Injectable } from '@angular/core';
import { Page } from 'src/environments/Page';
import { ApiService } from './apiService';

@Injectable({
  providedIn: 'root'
})
export class PageService extends ApiService<Page>{

}
