import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';
import { Hero } from './Hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  
  constructor(private http: HttpClient) { }  // DI HtppClient for service
  public findAll() {
    return this.http.get<Hero[]>("http://localhost:8080/hero").pipe(
      retry(3), // retry times after program has error
      catchError(this.handleError)
    )
  }


  // bắt lỗi của chương trình
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // Lỗi trả về từ client
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // Lỗi trả về từ máy chủ
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code (Xảy ra lỗi phía máy chủ) ${error.status}, body was (Dữ liệu trả về): `, error.error);
    }
    // Lỗi không rõ
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.(Lỗi không rõ)'));
  }


}
