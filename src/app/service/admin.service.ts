import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map , mergeMap} from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
// const user = JSON.parse(localStorage.getItem('user'));
// console.log(user.name); + 'token/' + user.token +
const apiUrl = '/api/';

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
  getformfields(subcatid): Observable<any> {
    return this.http.get(apiUrl + 'getformfields/' + subcatid, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
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
  getPageContent(page): Observable<any> {
    return this.http.get(apiUrl + 'admin/page/' + page).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  getSiteSettings(): Observable<any> {
    return this.http.get(apiUrl + 'admin/sitesettings').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  updateSiteSettings(formData): Observable<any> {
    return this.http
      .post(apiUrl + 'admin/sitesettings/', formData, httpOptions)
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }
  updatePageContent(formData): Observable<any> {
    return this.http
      .post(apiUrl + 'admin/page/', formData, httpOptions)
      .pipe(
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

  getReportedAd(reportadid): Observable<any> {
    return this.http.get(apiUrl + 'admin/reportedad/' + reportadid).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  updateReportedAdViewStatus(reportedadid): Observable<any> {
    return this.http
      .get(apiUrl + 'admin/reportedadupdatestatus/' + reportedadid)
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }
  getReportedAdList(): Observable<any> {
    return this.http.get(apiUrl + 'admin/reportedadlist').pipe(
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
  updateFormFields(
    formData: any
  ): Observable<any> {
    return this.http
      .post(
        apiUrl + 'admin/updateformfield/',
        formData,
        httpOptions
      )
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }
  /*
  import { mergeMap } from 'rxjs/operators';
  */
  // addformfields(formData: any): Observable<any> {
  //   return this.http
  //     .post(apiUrl + 'admin/addformfields/', formData, httpOptions)
  //     .pipe(
  //       map(this.extractData),
  //       catchError(this.handleError)
  //     );
  // }
  // addSubcategory(formData: any): Observable<any> {
  //   return this.http
  //     .post(apiUrl + 'admin/subcategory/', formData, httpOptions)
  //     .pipe(
  //       map(this.extractData),
  //       catchError(this.handleError)
  //     );
  // }
  addSubcategory(formData: any, formfields: any): Observable<any> {
    return this.http
      .post(apiUrl + 'admin/subcategory/', formData, httpOptions)
      .pipe(
        mergeMap(subcatid => {
         formfields.subcatid = subcatid['subcatid'];
         return this.http.post(apiUrl + 'admin/addformfields/', formfields, httpOptions);
        }),
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

  getBestSellerByCategorySubcategory(
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
          '/bestsellerproducts',
        httpOptions
      )
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }
  getMostviewedByCategorySubcategory(
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
          '/mostviewedproducts',
        httpOptions
      )
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }
  getOnSaleByCategorySubcategory(
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
          '/onsaleproducts',
        httpOptions
      )
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }
  getNewArrivalsByCategorySubcategory(
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
          '/newarrivalproducts',
        httpOptions
      )
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
/* best seller*/

makeProductBestSeller(
  product_id: string
): Observable<any> {
  return this.http
    .post(
      apiUrl +
        'admin/product/' +
        product_id +
        '/bestseller',
      httpOptions
    )
    .pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
}

makeProductNotBestSeller(
    product_id: string
): Observable<any> {
  return this.http
    .post(
      apiUrl +
        'admin/product/' +
        product_id +
        '/notbestseller',
      httpOptions
    )
    .pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
}
/* end best seller*/

/* Most viewed*/

makeProductMostViewed(
  product_id: string
): Observable<any> {
  return this.http
    .post(
      apiUrl +
        'admin/product/' +
        product_id +
        '/mostviewed',
      httpOptions
    )
    .pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
}

makeProductNotMostViewed(
    product_id: string
): Observable<any> {
  return this.http
    .post(
      apiUrl +
        'admin/product/' +
        product_id +
        '/notmostviewed',
      httpOptions
    )
    .pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
}
/* end Most viewed*/
/* On Sale*/

makeProductOnSale(
  product_id: string
): Observable<any> {
  return this.http
    .post(
      apiUrl +
        'admin/product/' +
        product_id +
        '/onsale',
      httpOptions
    )
    .pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
}

makeProductNotOnSale(
    product_id: string
): Observable<any> {
  return this.http
    .post(
      apiUrl +
        'admin/product/' +
        product_id +
        '/notonsale',
      httpOptions
    )
    .pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
}
/* end On Sale*/
/* NewArrival*/

makeProductNewArrival(
  product_id: string
): Observable<any> {
  return this.http
    .post(
      apiUrl +
        'admin/product/' +
        product_id +
        '/newarrival',
      httpOptions
    )
    .pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
}

makeProductNotNewArrival(
    product_id: string
): Observable<any> {
  return this.http
    .post(
      apiUrl +
        'admin/product/' +
        product_id +
        '/notnewarrival',
      httpOptions
    )
    .pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
}
/* end NewArrival*/
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
