import { Component } from '@angular/core';
import {AvatarServiceService} from "../avatar-service.service";
import {Template} from "../model/Template";
import {environment} from "../environment";

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {
  constructor(public avatar : AvatarServiceService) {
  }
  url = environment.url
  create(){
    this.avatar.saveTemplate(new Template(), template => this.avatar.template.unshift(template))
  }
  save(i : number){
    this.avatar.saveTemplate(this.avatar.template[i], template => this.avatar.template[i] = template)
  }
  delete(i : number){
    this.avatar.deleteTemplate(this.avatar.template[i].id, () => this.avatar.template.splice(i, 1))
  }


}
