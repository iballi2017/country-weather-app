import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { allCountries } from 'src/config/api';
import { catchError, map, tap, retry } from 'rxjs/operators';
import { handleError } from 'src/config/errorResponse';/* Importing errorResponse Handler */

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  constructor(private _http: HttpClient) { }
  getCountries(){
    return this._http.get(allCountries)
    .pipe(
      retry(3),
      catchError(handleError)
    );
  }

}
