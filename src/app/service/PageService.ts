import { Injectable } from '@angular/core';
import { Page } from '../Model/Page';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class PageService extends ApiService<Page>{
}
