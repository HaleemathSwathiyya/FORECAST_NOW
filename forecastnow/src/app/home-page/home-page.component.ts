import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service.service';
//import { WeatherService } from '../weather.service/weather.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  weatherData: any; // Stores the fetched weather data
weather: any;
forecast: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.fetchWeatherData('cochin'); // Call fetchWeatherData() with the desired location
  }

  fetchWeatherData(location: string) {
    this.weatherService.fetchWeatherData(location).subscribe(
      (data: any) => {
        this.weatherData = data;
        console.log(this.weatherData);
      },
      (error: any) => {
        console.error('Failed to fetch weather data:', error);
      }
    );
  }
}
