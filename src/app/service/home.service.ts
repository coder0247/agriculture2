import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map, flatMap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const apiUrl = '/api/';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) {}
  contactus(data): Observable<any> {
    return this.http.post(apiUrl + 'contact', data, httpOptions)
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }
  // getSubCatList(): Observable<any> {
  //   return this.http.get(apiUrl + 'croplist', httpOptions).pipe(
  //     map(this.extractData),
  //     catchError(this.handleError)
  //   );
  // }
  getformfields(subcatid): Observable<any> {
    return this.http.get(apiUrl + 'getformfields/' + subcatid, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  intlcodes(): Observable<any> {
    return this.http.get(apiUrl + 'intlcodes', httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  getPageContent(page): Observable<any> {
    return this.http.get(apiUrl + 'page/' +  page).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  getCatList(): Observable<any> {
    return this.http.get(apiUrl + 'catlist', httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  getSubcatListByCatID(catid: any): Observable<any> {
    return this.http
      .get(apiUrl + 'category/' + catid + '/subcatlist', httpOptions)
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }
  getAmountUnitList(): Observable<any> {
    return this.http.get(apiUrl + 'amountunitlist', httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  getCountryList(): Observable<any> {
    return this.http.get(apiUrl + 'countrynames', httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  getCityList(cityname): Observable<any> {
    return this.http.get(apiUrl + 'getcities/' + cityname , httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  checksubscription(data): Observable<any> {
    return this.http.get(apiUrl + 'newsletterSubs/' + data.email, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  subscribeemail(data): Observable<any> {
    return this.http.post(apiUrl + 'subscribe', data, httpOptions).pipe(
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
    const body = res;
    return body || {};
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
