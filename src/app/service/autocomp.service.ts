import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse , HttpHeaders} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, map, mergeMap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type':  'application/json'})
};
const apiUrl = '/api/';

@Injectable({
  providedIn: 'root'
})
export class AutocompService {

  constructor(private http: HttpClient ) { }
//   getsubcategorylist(term: string = null): Observable<any> {
//     let vitem =  this.http.get<any[]>(apiUrl + 'allsubcatlist', httpOptions);
//     console.log('vitems', vitem);
//     let items = getSubcatList();
//     if (term) {
//         items = items.filter(x => x.subcatname.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
//     }
//     return of(items).pipe(delay(500));
//   }
getsubcategorylist(term: string = null): Observable<any> {
    const categoryid = localStorage.getItem('categoryid') !== null ? localStorage.getItem('categoryid') : '';
    return this.http
      .get(apiUrl + 'allsubcatlist/' + categoryid, httpOptions)
      .pipe(
        mergeMap(subcategory => {
            // tslint:disable-next-line:max-line-length
            const items = subcategory['data']['subcategory'].filter(x => x.subcatname.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
            return of(items).pipe(delay(500));
         })
      );
  }

  private extractData(res: Response) {
    // console.log(res.headers);
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

