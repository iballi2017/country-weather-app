import { environment } from 'src/environments/environment';

export const countryBaseUrl = environment.production ? 'https//whateverapi.com/api/' : 'https://restcountries.eu/rest/v2/';
export const allCountries = countryBaseUrl + 'all';
export const majorCities = environment.production ? 'https//whateverapi.com/api/' : 'https://worldtimeapi.org/api/timezone/';
export const majorCitiesTimezones = majorCities + 'timezone/';


export const weatherBaseUrl = environment.production ? 'https//whateverapi.com/api/' : 'https://api.openweathermap.org/data/2.5/weather?q=';
export const queryAPIjoiner = '&appid=ed2293245a7f976aefe7f59cfd85af89';
