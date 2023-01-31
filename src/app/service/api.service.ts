import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};
export const host = {
  url : "http://localhost:8080", 
}

@Injectable({
  providedIn: 'root'
})
export class ApiService <E>{

  constructor(private http : HttpClient) { }

  public findAll(plusURL : string) : Observable<E[]> {
    return this.http.get<E[]>(host.url + plusURL).pipe(
      retry(3), // retry times after program has error
      catchError(this.handleError)
    )
  }

  /* GET object whose name contains search term */
  findByParamName(name: string , plusURL : string): Observable<E[]> {
    name = name.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = name ? {
      params: new HttpParams()
        .set('name', name)
        // .set('number', 123)
    } : {};

    return this.http.get<E[]>(host.url + plusURL, options)
      .pipe(
        catchError(this.handleError)
      );
  }

  findBy(plusURL : string): Observable<E> {
    return this.http.get<E>(host.url + plusURL)
      .pipe(
        catchError(this.handleError)
      );
  }

  /** POST: add a new object to the database */
  add(object: E, plusURL : string): Observable<E> {
    return this.http.post<E>(host.url + plusURL, object, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  /** DELETE: delete the hero from the server */
  delete(id: number, plusURL : string): Observable<unknown> {
    return this.http.delete(host.url + plusURL , httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  /** PUT: update the hero on the server. Returns the updated hero upon success. */
  update(hero: E, plusURL : string): Observable<E> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http.put<E>(host.url + plusURL, hero, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
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
