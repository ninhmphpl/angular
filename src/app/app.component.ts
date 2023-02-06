import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { environtment } from 'src/environtments/environment';
import { Tour } from './model/model';
import { TourService } from './service/tour.service';
const url = environtment.url
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  action = 0;
  tours : Tour[] = [];
  tourForm = this.fb.group<Tour>(new Tour());
  tourDetail! : Tour;

  constructor(
    private service : TourService,
    private fb : FormBuilder
  ){}


  ngOnInit(): void {
    this.getList()
  }
  getList(){
    this.action = 0
    this.service.getArray(url).subscribe(data => this.tours = data)
  }

  formUpdate(event : any){
    this.action = 1
    this.service.getOne(`${url}/${event}`).subscribe(
      data => this.tourForm.patchValue(data)
    )
  }

  formCreate(){
    this.action = 1
    this.tourForm = this.fb.group<Tour>(new Tour());
  }

  deleteTour(event : any){
    this.service.delete(`${url}/${event}`).subscribe(()=>this.getList())
    
  }

  detail(event : any){
    this.action = 2
    for(let i of this.tours){
      if(i.id === event) this.tourDetail = i
    }
  }

  submit(){
    let data = this.tourForm.value
    if(this.action == 1 && data.id != 0){
      this.service.put(`${url}/${data.id}`, data).subscribe(()=>{this.getList()})
    }else if(this.action == 1){
      this.service.post(`${url}`, data).subscribe(()=>{this.getList()})
    }
    
  }
}
