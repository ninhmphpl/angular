import {Type} from "./Type";
import {Music} from "./Music";

export class Video{
  id : any;
  name : any;
  url : any;
  description : any;
  thumb : any;
  thumbPercent : any;
  videoType! : Type;
  show : any;
  top : any;
  music! : Music;
  like : any;
  versionRequired!: number;
}
