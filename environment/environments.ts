import Swal from 'sweetalert2';

export const environment = {
  url : "http://localhost:8090",
  // url : "http://45.79.16.25:8090",
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
