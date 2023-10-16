import {Source} from "./Source";

export class Background2{
  id ! : string
  source ! : Source;
  priority : number = 0;
  lock : boolean = false;
  top : boolean = false;
}
