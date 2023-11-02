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
    this.avatar.saveTemplate(new Template(), template => this.avatar.categorySelect.templates.unshift(template))
  }
  save(i : number){
    this.avatar.saveTemplate(this.avatar.categorySelect.templates[i], template => this.avatar.categorySelect.templates[i] = template)
  }
  delete(i : number){
    this.avatar.deleteTemplate(this.avatar.categorySelect.templates[i].id, () => this.avatar.categorySelect.templates.splice(i, 1))
  }


}
