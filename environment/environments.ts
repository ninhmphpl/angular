import Swal from "sweetalert2";

export const environment = {
  url : "http://localhost:8082",
  urlUploadFileSocket: "ws://data2.antliaespacelab.com",
}

export function successAlert(string : string){
  Swal.fire({
    icon: 'success',
    title: string,
    showConfirmButton: false,
    timer: 1500
  })
}
export function errorAlert(string : string){
  Swal.fire({
    icon: 'error',
    title: string,
    showConfirmButton: false,
  })
}

export function deleteAlert(action : any){
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
