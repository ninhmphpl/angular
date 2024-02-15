import {HttpHeaders} from "@angular/common/http";

export const environment = {
  url : "http://localhost:8080", // Expand
  keySaveToken : "Paw-Patrol-X-Token",
  firebase: {
    apiKey: "AIzaSyBk7gs8EjXEiVROAY326uHKdFC6eLLNE8A",
    authDomain: "fir-project-ac36e.firebaseapp.com",
    projectId: "fir-project-ac36e",
    storageBucket: "fir-project-ac36e.appspot.com",
    messagingSenderId: "625100437167",
    appId: "1:625100437167:web:046a24919959220837c65a",
    measurementId: "G-LSFP62D2ZG"
  }
}
export function getHeader(){
  return {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem(environment.keySaveToken)??""
    })
  };
}
export function uploadFile(url: string, urlFolder : string, file: File, getUrlDownload?: (urlDownload: string) => any, getPercent?: (percent: number) => any) {
  const chunkSize = 1024 * 7; // Size of each piece of data (1 MB)
  const totalChunks = Math.ceil(file.size / chunkSize); // data total
  let currentChunk = 0; // number percent downloaded
  let sockets = new WebSocket(url + "?" + urlFolder + "&&&" + file.name + "&&&" + file.size);
  sockets.onopen = () => {
    console.log("connected")
    const reader = new FileReader();
    reader.onload = (event: any) => {
      const data: ArrayBuffer = event.target.result;
      sockets.send(data);

      currentChunk++;
      if (currentChunk < totalChunks) {
        // If you haven't uploaded all the data yet, continue to upload the next part
        const start = currentChunk * chunkSize;
        const end = Math.min(start + chunkSize, file.size);
        const nextChunk = file.slice(start, end);
        reader.readAsArrayBuffer(nextChunk);
      } else {
        // If you have uploaded all the data, send a request to complete the upload
        sockets.send("done");
      }
    };
    // Start uploading the first piece of data
    const firstChunk = file.slice(0, chunkSize);
    reader.readAsArrayBuffer(firstChunk);
  }
  // finish upload, return url file
  sockets.onmessage = function (event) {
    let load: string = event.data;
    if (load.startsWith("done")) {
      if (getUrlDownload) getUrlDownload(load.substring(5))
    } else if (load.indexOf("%") != -1) {
      if (getPercent) getPercent(parseInt(load))
    }
  };
}
