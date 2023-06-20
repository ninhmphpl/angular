import Swal from 'sweetalert2'
export function alertError(title : string){
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: title,
  })
}
export function alertSuccess(title : string){
  Swal.fire({
    // position: 'top-end',
    icon: 'success',
    title: title,
    showConfirmButton: false,
    timer: 1500
  })
}
