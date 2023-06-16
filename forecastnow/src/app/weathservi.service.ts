import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from 'src/environments/environments';
import { Climate } from 'src/model/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeathserviService {

  constructor(private http:HttpClient) { }

  getWeatherData(cityName: string): Observable<Climate> {
    const headers = new HttpHeaders()
      .set(environments.XRapidAPIHostHeaderName, environments.XRapidAPIHostHeaderValue)
      .set(environments.XRapidAPIKeyHeaderName, environments.XRapidAPIKeyHeaderValue); // Replace 'YOUR_WEATHER_API_KEY' with your actual API key
  
    const params = new HttpParams()
      .set('location', cityName)
      // .set('units', 'metric')
      // .set('mode', 'json')
      .set('days','56');
      // .set('lang','en')
      // .set('dt','2023-06-16');
  
    return this.http.get<Climate>(environments.weatherBaseUrl, {
      headers,
      params
    });

  }
}
