import { Component, OnInit } from '@angular/core';
import { Climate } from 'src/model/weather.model';
import { WeathserviService } from './weathservi.service';
//import { WeatherService } from './weather.service.service';
//import { WeatherService } from './weather.service/weather.service.component';
//import { WeatherService } from './weather.service/weather.service.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit{

  
  constructor(private weathserviService:WeathserviService){}

  climate?:Climate;

  cityName: string = 'Berlin';

  ngOnInit(): void {

    this.getWeatherData(this.cityName);
    this.cityName = '';
    
    // throw new Error('Method not implemented.');
  }

  onSubmit(){

    this.getWeatherData(this.cityName);
    this.cityName = '';

  }

  private getWeatherData(cityName: string){
    this.weathserviService.getWeatherData(cityName).subscribe({
      next:(response)=>{

        this.climate = response;

        console.log(response);
      }
    })
  }


}
  

  // ngOnInit() {
  //   const location = 'San Francisco'; // Replace with the desired location
  //   this.weatherService.fetchWeatherData(location);
  // }
  
  // title = 'forecastnow';
// }

// import { Component, OnInit } from '@angular/core';
// import { WeatherService } from './weather.service.service';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
//   providers: [WeatherService]
// })
// export class AppComponent implements OnInit {
//   constructor(
//     private weatherService: WeatherService,
//     private http: HttpClient
//   ) {}

//   ngOnInit() {
//     // Fetch weather data for the default location
//     const defaultLocation = 'San Francisco';
//     this.weatherService.fetchWeatherData(defaultLocation);
//   }

//   onSearchInputChange(searchText: string) {
//     // Perform search and redirect to OpenAPI endpoint
//     const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${this.apiKey}'; // Replace with your OpenAPI endpoint

//     // const apiUrl = 'https://api.example.com/search'; // Replace with your OpenAPI endpoint
//     const params = { query: location }; // Set the query parameter
    
//     this.http.get(apiUrl, { params }).subscribe(
//       (response) => {
//         // Process the response from the OpenAPI
//         console.log('Search result:', response);
//         // Redirect or perform further actions based on the response
//       },
//       (error) => {
//         // Handle the error if the HTTP request fails
//         console.error('Search error:', error);
//       }
//     );
//   }
// }

