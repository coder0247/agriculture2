import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse , HttpHeaders} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
// const user = JSON.parse(localStorage.getItem('user'));
const apiUrl = 'http://localhost:3000/api/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient ) { }
  doLogin(data): Observable<any> {
    return this.http.post(apiUrl + 'user/signin', data)
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }
  newUserRegister(data): Observable<any> {
    return this.http.post(apiUrl + 'user/register', data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  dologout(): Observable<any> {
    return this.http.get(apiUrl + 'user/logout', httpOptions )
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }
  authsession(): Observable<any> {
    return this.http.get(apiUrl + 'auth', httpOptions )
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }
  // getProducts(): Observable<any> {
  //   return this.http.get(apiUrl, httpOptions).pipe(
  //     map(this.extractData),
  //     catchError(this.handleError));
  // }

  // getProduct(id: string): Observable<any> {
  //   const url = `${apiUrl}/${id}`;
  //   return this.http.get(url, httpOptions).pipe(
  //     map(this.extractData),
  //     catchError(this.handleError));
  // }

  // postProduct(data): Observable<any> {
  //   return this.http.post(apiUrl, data, httpOptions)
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }

  // updateProduct(data): Observable<any> {
  //   return this.http.put(apiUrl, data, httpOptions)
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }

  // deleteProduct(id: string): Observable<{}> {
  //   const url = `${apiUrl}/${id}`;
  //   return this.http.delete(url, httpOptions)
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }
  private extractData(res: Response) {
    console.log(res.headers);
    const body = res;
    return body || { };
  }
  private handleError(error: HttpErrorResponse ) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
