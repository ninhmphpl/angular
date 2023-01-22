import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Hero } from './Hero';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

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

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    term = term.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = term ? {
      params: new HttpParams()
        .set('name', term)
        .set('number', 123)
    } : {};

    return this.http.get<Hero[]>("http://localhost:8080/hero", options)
      .pipe(
        catchError(this.handleError)
      );
  }

  /** POST: add a new hero to the database */
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>("http://localhost:8080/hero", hero, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  /** DELETE: delete the hero from the server */
  deleteHero(id: number): Observable<unknown> {
    const url = `${"http://localhost:8080/hero"}/${id}`; // DELETE api/heroes/42
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  /** PUT: update the hero on the server. Returns the updated hero upon success. */
  updateHero(hero: Hero): Observable<Hero> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http.put<Hero>("http://localhost:8080/hero", hero, httpOptions)
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
