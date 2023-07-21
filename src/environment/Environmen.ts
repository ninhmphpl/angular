import Swal from "sweetalert2";

export const environment = {
  url: "http://localhost:8081"
}

export function successAlert(string: string) {
  Swal.fire({
    icon: 'success',
    title: string,
    showConfirmButton: false,
    timer: 1500
  })
}

export function errorAlert(string: string) {
  Swal.fire({
    icon: 'error',
    title: string,
    showConfirmButton: false,
  })
}

export function deleteAlert(action: any) {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      action()
    }
  })
}


export interface Status {
  status: string;
  percent: string;
}

export function convertSpecialCharacters(str: string, c1: string, c2: string) {
  return str.replace(/[^A-Za-z0-9.]+/g, function (match) {
    if (match.indexOf(c2) !== -1) {
      return match;
    } else {
      return c1;
    }
  });
}

export function uploadFile(url: string, urlFolder : string, file: File, getUrlDownload?: (urlDownload: string) => any, getPercent?: (percent: number) => any) {
  const chunkSize = 1024 * 7; // Size of each piece of data (1 MB)
  const totalChunks = Math.ceil(file.size / chunkSize); // data total
  let currentChunk = 0; // number percent downloaded
  let sockets = new WebSocket(url + "?" + urlFolder + "&&&" + file.name+ "&&&" + file.size);
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

