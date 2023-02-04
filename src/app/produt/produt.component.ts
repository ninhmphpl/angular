import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment, httpOptions } from 'src/environments/environment';
import { Page } from 'src/environments/Page';
import { PageService } from '../service/page.service';

const url = environment.url

@Component({
  selector: 'app-produt',
  templateUrl: './produt.component.html',
  styleUrls: ['./produt.component.scss']
})
export class ProdutComponent implements OnInit{
  public page! : Page;
  constructor(private service : PageService){}

  ngOnInit(): void {
    console.log('init productComponent');
    
    httpOptions.params = new HttpParams().set('page',0)
    this.service.getOne(`${url}/products/lites/pages` , httpOptions).subscribe (data => this.page = data)
  }
}
