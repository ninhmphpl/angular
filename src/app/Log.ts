const data : {id : number, progress : number, name : string}[] = []
export function log(progress : number, name : string) : string{
  for(let i = 0 ; i < data.length ; i ++){
    if(data[i].name === name){
      data[i].progress = progress;
      return toString();
    }
  }
  data.push( {id : data.length, progress : progress, name : name})
  return toString();
}

function toString() : string{
  let text = "";
  for(let i of data){
    text += `${i.id}. ${i.name.substring(0,20)}... - ${i.progress}%\n`;
  }
  return text;
}
