

export function uploadFile (file : File,url : string, typeName : string, action : any){
  const chunkSize = 1024 * 7; // Size of each piece of data (1 MB)
  const totalChunks = Math.ceil(file.size / chunkSize); // data total
  let currentChunk = 0; // number percent downloaded
  let name = file.name.substring(0, file.name.lastIndexOf("."))
  let fileName = new Date().getTime() + file.name.substring(file.name.lastIndexOf("."))
  let sockets = new WebSocket(url + "?" + fileName + "&" + name + "&" + typeName);
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
  sockets.onmessage = function (event) {
    action(event)
  };
}
