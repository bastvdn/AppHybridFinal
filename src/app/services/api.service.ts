//api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Notes } from '../models/notes';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_path = 'http://laboweb.ecam.be/notepad_s4/public/index.php/api/notes';
  cat_path = 'http://laboweb.ecam.be/notepad_s4/public/index.php/api/categories';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  handleError(error: HttpErrorResponse) {
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
    return throwError(
      'Something bad happened; please try again later.');
  };

  createItem(item): Observable<Notes> {
    return this.http
      .post<Notes>(this.base_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  createCat(cat): Observable<Category> {
    return this.http
      .post<Category>(this.cat_path, JSON.stringify(cat), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getItem(id): Observable<Notes> {
    return this.http
      .get<Notes>(this.base_path + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  getCatItem(id): Observable<Category> {
    return this.http
      .get<Category>(this.cat_path + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getList(): Observable<Notes> {
    return this.http
      .get<Notes>(this.base_path)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getCatList(): Observable<Category> {
    return this.http
      .get<Category>(this.cat_path)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updateItem(id, item): Observable<Notes> {
    return this.http
      .put<Notes>(this.base_path + '/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  deleteItem(id) {
    return this.http
      .delete<Notes>(this.base_path + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  deleteCat(id){
    return this.http
      .delete<Category>(this.cat_path + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

}
