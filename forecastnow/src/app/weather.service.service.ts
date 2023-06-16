// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class WeatherService {
//   private apiKey: string = 'f6ddcfcf065f5af49761124345d25cc3'; // Replace 'Your API Key' with your actual API key

//   constructor(private http: HttpClient) {}

//   fetchWeatherData(location: string): Observable<any> {
//     const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${this.apiKey}`;
//     return this.http.get<any[]>(apiUrl);
//   }
// }


// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class WeatherService {
//   apiKey = 'f6ddcfcf065f5af49761124345d25cc3';

//   constructor(private http: HttpClient) {}

//   fetchWeatherData(location: string) {
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${this.apiKey}`;

//     return this.http.get(apiUrl);
//   }
// }
