import {Style} from "./style";
export class StyleChoice{
  constructor(choice: boolean, style: Style) {
    this.choice = choice;
    this.style = style;
  }

  choice : boolean
  style : Style
}
export function  get(allStyle : Style[], currenStyle : Style[]): StyleChoice[] {
  let styleChoice : StyleChoice[] = []
  styleChoice = []
  for(let i = 0 ; i < allStyle.length ; i ++){
    styleChoice.push(new StyleChoice(false, allStyle[i]))
    for(let j = 0 ; j < currenStyle.length; j ++){
      if(currenStyle[j].id === allStyle[i].id){
        styleChoice[i].choice = true;
        break
      }
    }
  }
  return styleChoice;
}

export function  set(styleChoice : StyleChoice[]) : Style[]{
  let a : Style[] = []
  styleChoice.forEach(value => {
    if(value.choice) a.push(value.style)
  })
  return a;
}
