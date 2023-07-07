import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environment/environments";
import {HttpClient} from "@angular/common/http";
import {Category} from "../../model/Category";
const url = environment.url
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{
  categories : Category[] = []
  constructor(private http : HttpClient) {
  }
  ngOnInit(): void {
    this.getList()
  }
  getList(){
    this.http.get(url + "/category").subscribe((payload : any)=>{
      this.categories = payload.data;
    }, (error : any) => {
      console.log(error)
    })
  }
  save(category : any, file : any){
    let formData = new FormData()
    formData.append("category", JSON.stringify(category))
    formData.append("file", (file && file.length > 0)?file[0]:null)
    this.http.post(url + "/category", formData).subscribe((payload : any)=>{
      if(payload.code == 200) this.getList()
    }, (error : any)=>{
      console.log(error)
    })
  }
  delete(id : any){
    this.http.delete(url + "/category/" + id).subscribe((payload : any)=>{
      if(payload.code == 200) this.getList()
    }, (error : any)=>{
      console.log(error)
    })
  }
}
