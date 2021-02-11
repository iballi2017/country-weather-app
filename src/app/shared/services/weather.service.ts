import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { weatherBaseUrl } from 'src/config/api';
import { queryAPIjoiner } from 'src/config/api';


@Injectable({
  providedIn: 'root'
})
export class WeatherService { 
  constructor(private _http: HttpClient) {  }
  getWeather(country){
    return this._http.get(weatherBaseUrl + country + queryAPIjoiner);
  }
}
