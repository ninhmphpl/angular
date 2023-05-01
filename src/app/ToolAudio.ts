/**
 * Get duration audio file
 */
export function getDurationFromFile(file: File, action : any) {
  if(file.type.indexOf("audio") === -1){
    action(0);
  }
  let reader: FileReader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    let result : any= reader.result;
    const audio = new Audio(result);
    audio.addEventListener("loadedmetadata", () => {
      action(audio.duration * 1000)
    });
  }
}
