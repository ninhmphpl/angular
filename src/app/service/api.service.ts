import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
import {catchError, retry, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  localKey = 'web_pet'
  apiOnload : any
  apiError : any
  constructor(
    private http: HttpClient,
    public route: Router,
  ) { }
  setLocal(data : any){
    localStorage.setItem(this.localKey, data)
  }
  getToken(){
    let data : any = localStorage.getItem(this.localKey)
    if(data){
      data = JSON.parse(data)
      let token = `${data.type} ${data.token}`
      console.log(token)
      return token
    }
    return 'No token'
  }
  getRole(){
    let role : any
    let data : any = localStorage.getItem(this.localKey)
    data = JSON.parse(data)
    if(data){
      role = data.role;
    }
    console.log(role)
    return role
  }

  httpOption : any = {
  }

  /**
   * @param header  là kiểu dữ liệu object
   * {'Content-Type': 'application/json',
      Authorization: environtment.token}
   */
  setHeader(header: any) {
    this.httpOption.headers = header
  }
  /**
   * set dữ liệu cho param
   */
  setParam(param : HttpParams) {
    this.httpOption.params = param
  }

  getMapping(url: string, action: any) {
    console.log(url)
    this.apiOnload = true
    this.http.get<any>(url, this.httpOption)
      .pipe(
        retry(3), catchError((err : any)=>this.handleError(err))
      ).subscribe((data) => {
      this.filterData(data, action)
      this.apiOnload = false
    })
  }

  /** POST: add a new object to the database */
  postMapping(url: string, object: any, action: any) {
    console.log(url)
    this.apiOnload = true
    this.http.post<any>(url, object, this.httpOption)
      .pipe(
        retry(3), catchError((err : any)=>this.handleError(err))
      ).subscribe((data) => {
      this.filterData(data, action)
    })
  }

  /** DELETE: delete the hero from the server */
  deleteMapping(url: string, action: any) {
    console.log(url)
    this.apiOnload = true
    this.http.delete<any>(url, this.httpOption)
      .pipe(
        retry(3), catchError((err : any)=>this.handleError(err))
      ).subscribe((data) => {
      this.filterData(data, action)
    })
  }

  /** PUT: update the object on the server. Returns the updated hero upon success. */
  putMapping(url: string, object: any, action: any) {
    console.log(url)
    this.apiOnload = true
    this.http.put<any>(url, object, this.httpOption)
      .pipe(
        retry(3), catchError((err : any)=>this.handleError(err))
      ).subscribe((data) => {
      this.filterData(data, action)
    })
  }

  public filterData(data: any, action: any) {
    if (typeof data == 'string') {
      this.apiError = data.split(',')
      this.route.navigate(['/error'])
    } else {
      console.log('data: ')
      console.log(data);
      action(data)
    }
    this.apiOnload = false
  }

  // bắt lỗi của chương trình
  private handleError(error: HttpErrorResponse) {
    this.apiError = error
    if (error.status === 0) {
      // Lỗi trả về từ client
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code (Xảy ra lỗi phía máy chủ) ${error.status}, body was (Dữ liệu trả về): `, error.error);
    }
    // Lỗi không rõ
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.(Lỗi không rõ)'));
  }
}
