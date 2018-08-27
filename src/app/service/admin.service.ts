import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
// const user = JSON.parse(localStorage.getItem('user'));
// console.log(user.name); + 'token/' + user.token +
const apiUrl = 'http://localhost:3000/api/';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) {}

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

  login(formData: any): Observable<any> {
    return this.http.post(apiUrl + 'admin/login', formData, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  logout(): Observable<any> {
    return this.http.get(apiUrl + 'admin/logout', httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getCategoryList(): Observable<any> {
    return this.http.get(apiUrl + 'admin/categories').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getActiveCategories(): Observable<any> {
    return this.http.get(apiUrl + 'admin/active-categories', httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getSubcategoryListByCategory(category_id: string): Observable<any> {
    return this.http
      .get(
        apiUrl + 'admin/category/' + category_id + '/subcategories',
        httpOptions
      )
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  getActiveSubcategoryListByCategory(category_id: string): Observable<any> {
    return this.http
      .get(
        apiUrl + 'admin/category/' + category_id + '/active-subcategories',
        httpOptions
      )
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  getCategoryDetails(category_id: string): Observable<any> {
    return this.http
      .get(apiUrl + 'admin/category/' + category_id, httpOptions)
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  updateCategoryDetails(category_id: string, formData: any): Observable<any> {
    return this.http
      .put(apiUrl + 'admin/category/' + category_id, formData, httpOptions)
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  addCategory(formData: any): Observable<any> {
    return this.http
      .post(apiUrl + 'admin/category/', formData, httpOptions)
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  deleteCategory(category_id: string): Observable<any> {
    return this.http
      .delete(apiUrl + 'admin/category/' + category_id, httpOptions)
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  getSubcategoryDetails(subcategory_id: string): Observable<any> {
    return this.http
      .get(apiUrl + 'admin/subcategory/' + subcategory_id, httpOptions)
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  updateSubcategoryDetails(
    subcategory_id: string,
    formData: any
  ): Observable<any> {
    return this.http
      .put(
        apiUrl + 'admin/subcategory/' + subcategory_id,
        formData,
        httpOptions
      )
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  addSubcategory(formData: any): Observable<any> {
    return this.http
      .post(apiUrl + 'admin/subcategory/', formData, httpOptions)
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  deleteSubcategory(subcategory_id: string): Observable<any> {
    return this.http
      .delete(apiUrl + 'admin/subcategory/' + subcategory_id, httpOptions)
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  getProductListByCategorySubcategory(
    category_id: string,
    subcategory_id: string
  ): Observable<any> {
    return this.http
      .get(
        apiUrl +
          'admin/category/' +
          category_id +
          '/subcategory/' +
          subcategory_id +
          '/products',
        httpOptions
      )
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  makeProductFeatured(
    category_id: string,
    subcategory_id: string,
    product_id: string
  ): Observable<any> {
    return this.http
      .post(
        apiUrl +
          'admin/categoryid/' +
          category_id +
          '/subcategory/' +
          subcategory_id +
          '/product/' +
          product_id +
          '/featured',
        httpOptions
      )
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  makeProductUnfeatured(
    subcategory_id: string,
    product_id: string
  ): Observable<any> {
    return this.http
      .post(
        apiUrl +
          'admin/subcategory/' +
          subcategory_id +
          '/product/' +
          product_id +
          '/unfeatured',
        httpOptions
      )
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  getUserList(): Observable<any> {
    return this.http.get(apiUrl + 'admin/users', httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
 adminsession(): Observable<any> {
    return this.http.get(apiUrl + 'adminauth', httpOptions )
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }
}
