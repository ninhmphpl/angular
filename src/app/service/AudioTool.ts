/**
 * Get duration audio file
 */
export function getDurationFromFile(file: File, action : any) {
  // Kiểm tra nếu là tệp âm thanh
  if(file.type.indexOf("audio") !== -1){
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
  //Kiểm tra nếu là tệp video
  if(file.type.indexOf("video") !== -1) {
    const blobURL = URL.createObjectURL(file);
    const video = document.createElement('video');
    video.src = blobURL;
    video.addEventListener('loadedmetadata', ()=> {
      const duration = video.duration;
      action(duration); // log độ dài video tính bằng giây
      // Giải phóng bộ nhớ
      URL.revokeObjectURL(blobURL);
      return;
    })
  }
  action(0);
  return;
}
