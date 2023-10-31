import {Icon} from "./Icon";
import {WallPaper} from "./WallPaper";
import {Widget} from "./Widget";

export class Theme {
  id!: string
  name!: string
  thumb!: string
  createAt!: number
  icons!: Icon[]
  widget!: Widget[]
  wallPaper!: WallPaper
}
