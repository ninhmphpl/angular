import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {Project} from "../../model/Project";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit{
  projectList : Project[] = []
  constructor(private api : ApiService) {
  }
  ngOnInit(): void {
    this.api.getListProject(project => this.projectList = project)
  }





}
