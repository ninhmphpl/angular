import {Component, OnInit} from '@angular/core';
import {TypeService} from "../type.service";
import {Type} from "../model/Type";

@Component({
  selector: 'app-video-type',
  templateUrl: './video-type.component.html',
  styleUrls: ['./video-type.component.scss']
})
export class VideoTypeComponent implements OnInit {
  data: Type[] = []
  constructor(public typeService: TypeService) {
  }
  ngOnInit(): void {
    this.typeService.getType(data => {
      this.data = data
    })
  }

  save(index : number){
    let type : any = (index != -1)? this.data[index] : {}
    console.log(type)
    this.typeService.save(type, data =>{
      if(index != -1) this.data[index] = data;
      else this.data.unshift(data)
      // alert("Done")
    })
  }
  delete(index : number){
    if (confirm("Delete ?")){
      let type : Type = this.data[index]
      this.typeService.delete(type, data => {
        console.log(data)
        if(data === "done") this.data.splice(index,1)
        alert(data)
      })
    }
  }

}
