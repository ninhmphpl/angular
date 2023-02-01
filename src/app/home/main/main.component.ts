import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpOptions } from 'src/app/Model/Api';
import { Page } from 'src/app/Model/Page';
import { ProductLite } from 'src/app/Model/Product';
import { PageService } from 'src/app/Service/PageService';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public page!: Page;
  public httpOption: HttpOptions;
  public url!: string;

  public products: ProductLite[] = [];

  constructor(
    private service: PageService) {
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      }),
      params: new HttpParams().append('page', 0)
    }
    this.getPage()
  }

  ngOnInit(): void {
  }
  //Start Page
  getPage() {
    this.url = 'http://localhost:8080/products/lites/pages'
    this.service.getOne(this.url, this.httpOption).subscribe((data: Page) => this.page = { ...data })
  }
  //End Page

  // Start filter
  public sorts: string[] = ['Price', 'Price: Low to High ', 'Price: High to Low'];
  public filters: string[] = ['Popular', 'Laster', 'Top Seller'];
  // >0 ==> choice
  public sort: number = 0;
  // >=0 ==> choice
  public filter: number = 0;

  public setSort(i: number) {
    this.sort = i;
    this.filter = -1;
  }
  public setFilter(i: number) {
    this.filter = i;
    this.sort = 0;
  }
  // End filter

  // Start Footer
  foot! : number[];
  
  public setPageNumer(number : number){
    this.httpOption.params = new HttpParams().append('page', number)
    this.getPage()
  }
  // End Footer








}
