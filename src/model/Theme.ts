import {CallIcon} from "./CallIcon";
import {Source} from "./Source";

export class Theme {
  id! : string;
  name! : string;
  backGround! : string;
  category! : string;
  avatar! : string;
  note! : string;
  title! : string;
  ringstone_url! : string;
  call_icon! : CallIcon;
  top! : boolean;
  lock! : boolean;
  priority! : number;
  trending! : boolean;
  source! : Source;
  sourceAvatar! : Source;
  topGallery!:boolean;
}
