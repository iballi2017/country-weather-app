import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CountryService } from 'src/app/shared/services/country.service';
import { WeatherService } from 'src/app/shared/services/weather.service';
import { weatherBaseUrl } from 'src/config/api';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  countries: any;
  @ViewChild('country', {static : true}) country : TemplateRef<string>;
  weatherData: any;
  url=weatherBaseUrl;
  lng;
  lat;
  errorText: any;
  tempCelc;
  tempCelcMin: string;
  tempCelcMax: string;

  constructor(private _countrySvc: CountryService, private _weatherSvc: WeatherService) { }

  ngOnInit(): void {
    // console.log(this.country);
    this.handleGetCountries();
  }

  handleGetCountries(){
    this._countrySvc.getCountries().subscribe((response:any)=>{
      // console.log(response)
      this.countries = response
    });
  }

  handleGetWeather(e){
    this._weatherSvc.getWeather(e.value).subscribe((response:any)=>{
      // console.log(response);
      // console.log(response.name);
      this.weatherData = response
      // console.log(this.weatherData.sys.country);
      this.lng = this.weatherData!.coord.lon
      this.lat = this.weatherData!.coord.lat
      this.errorText ="";
      this.tempCelc = (this.weatherData!.main.temp-273.15).toFixed(2);
      this.tempCelcMin = (this.weatherData!.main.temp_min-273.15).toFixed(2);
      this.tempCelcMax = (this.weatherData!.main.temp_max-273.15).toFixed(2);
      // console.log(this.tempCelc);
      // console.log(typeof(this.tempCelc));
    },
    (error=>{
      // console.log(error)
      this.errorText = error.statusText
    })
    )
    // console.log({
    //   longitude: this.lat,
    //   latitude: this.lng
    // })
  }


  // countries: Country[] = [
  //   {value: 'nigeria-0', viewValue: 'Nigeria'},
  //   {value: 'ghana-1', viewValue: 'Ghana'},
  //   {value: 'ivorycoast-2', viewValue: 'Ivory coast'}
  // ];
}
