import {Template} from "./Template";

export class Category{
  id : any
  name : any
  priority! : number;
  templates : Template[] = []
  suggestion : any[] = []
}
