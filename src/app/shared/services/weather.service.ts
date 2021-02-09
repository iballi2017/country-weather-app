import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { weatherBaseUrl } from 'src/config/api';
import { queryAPIjoiner } from 'src/config/api';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
 
  constructor(private _http: HttpClient) { }

  getWeather(country){
    // console.log(weatherBaseUrl + country + queryAPIjoiner + 'ed2293245a7f976aefe7f59cfd85af89')
    // return weatherBaseUrl + country + queryAPIjoiner + 'ed2293245a7f976aefe7f59cfd85af89';
    return this._http.get(weatherBaseUrl + country + queryAPIjoiner);
  }

  getData(country){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + country + '&appid=ed2293245a7f976aefe7f59cfd85af89');
  }
}
