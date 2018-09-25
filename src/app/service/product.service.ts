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
const apiUrl = '/api/';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProductList(id: string): Observable<any> {
    return this.http.get(apiUrl + 'crop/' + id, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  getProductListByCat(id: string): Observable<any> {
    return this.http.get(apiUrl + 'productlistbycat/' + id, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  getProductListBySubCat (subcatlist) {
    return this.http.post( apiUrl + 'getProductListBySubCat', subcatlist )
    .pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  getProductListByUser(id: string): Observable<any> {
    return this.http.get(apiUrl + 'productsbyuser/' + id, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  userdashboard(id: string): Observable<any> {
    return this.http.get(apiUrl + 'user/dashboard/' + id, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  getSellerByProductID(sellerid: string): Observable<any> {
    return this.http
      .get(apiUrl + 'getsellerinfo/' + sellerid, httpOptions)
      .pipe(
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
  setAdArchive(productid: string): Observable<any> {
    return this.http
      .get(apiUrl + 'setproductarchive/' + productid, httpOptions)
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }
  deleteProduct(product_id: string): Observable<any> {
    return this.http
      .delete(apiUrl + 'removeproduct/' + product_id, httpOptions)
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }
  getArchiveProductByUser(id: string): Observable<any> {
    return this.http.get(apiUrl + 'archiveads/' + id, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  setAdActive(productid: string): Observable<any> {
    return this.http
      .get(apiUrl + 'setproductactive/' + productid, httpOptions)
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  getSearchResult(subcatid, regionid) {
    return this.http
      .get(
        apiUrl + 'search/subcategory/' + subcatid + '/region/' + regionid,
        httpOptions
      )
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  getProductDetail(productid) {
    return this.http.get(apiUrl + 'product/' + productid, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  saveProductViewedStatus(productid, client_ip) {
    return this.http
      .post(
        apiUrl + 'product/' + productid + '/client/' + client_ip + '/viewed',
        {},
        httpOptions
      )
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  addNewProduct(newproduct): Observable<any> {
    return this.http.post(apiUrl + 'addnewproduct', newproduct).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  updateProduct(productdetails): Observable<any> {
    return this.http.post(apiUrl + 'updateproduct', productdetails).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  getSFeaturedProductList() {
    return this.http.get(apiUrl + 'featuredlist/', httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getBestSellProductList(limit: any) {
    limit = limit || '';
    return this.http.get(apiUrl + 'bestselllist/' + limit, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getMostViewedProductList(limit: any) {
    limit = limit || '';
    return this.http.get(apiUrl + 'mostviewed/' + limit, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getNewProductList(limit: any) {
    limit = limit || '';
    return this.http.get(apiUrl + 'newarrival/' + limit, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  //   getRegionList(): Observable<any> {
  //     return this.http.get(apiUrl + 'regionlist', httpOptions).pipe(
  //         map(this.extractData),
  //         catchError(this.handleError)
  //     );
  //   }

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
