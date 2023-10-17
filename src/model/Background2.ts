import {Source} from "./Source";
import {CallIcon} from "./CallIcon";

export class Background2{
  id ! : string
  source ! : Source;
  priority : number = 0;
  lock : boolean = false;
  top : boolean = false;
  callIcon! : CallIcon;
}
