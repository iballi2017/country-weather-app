import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { majorCities } from 'src/config/api';
import { catchError, map, tap, retry } from 'rxjs/operators';
import { handleError } from 'src/config/errorResponse';/* Importing errorResponse Handler */

@Injectable({
  providedIn: 'root'
})
export class WorldTimezoneService {

  constructor(private _http: HttpClient) { }

  getTimeCities(){
    // console.log(majorCities);
    return this._http.get(majorCities)
    .pipe(
      retry(3),
      catchError(handleError)
    );;
  }


  getCityData(city){
    return this._http.get(majorCities + city)
    .pipe(
      catchError(handleError)
    );
  }
}
