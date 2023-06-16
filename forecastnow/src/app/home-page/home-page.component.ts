// import { Component, OnInit } from '@angular/core';
// import { WeatherService } from '../weather.service.service';

// @Component({
//   selector: 'app-home-page',
//   templateUrl: './home-page.component.html',
//   styleUrls: ['./home-page.component.css']
// })
// export class HomePageComponent implements OnInit {
//   weatherData: any; // Stores the fetched weather data
//   weather: any;
//   forecast: any[] | undefined;

//   constructor(private weatherService: WeatherService) {}

//   ngOnInit(): void {
//     this.getWeatherData(); // Call getWeatherData() to fetch the weather data
//   }

//   getWeatherData() {
//     const location = 'Cochin'; // Replace 'Your desired location' with the actual location
//     this.weatherService.fetchWeatherData(location).subscribe((data: any) => {
//       console.log(data);
//       this.setWeatherData(data);
//     });
//   }


//   setWeatherData(data: any) {
//     this.weatherData = data;
//     // let sunsetTime = new Date(this.weatherData.sys.sunset * 1000);
//     // this.weatherData.sunset_time = sunsetTime.toLocaleTimeString();
//     // let currentDate = new Date();
//     // this.weatherData.isDay = currentDate.getTime() < sunsetTime.getTime();
  
//     if (this.weatherData && this.weatherData.main) {
//       this.weatherData.temp_celsius = Math.round(this.weatherData.main.temp - 273.15).toFixed(0);
//       this.weatherData.temp_feels_like = Math.round(this.weatherData.main.feels_like - 273.15).toFixed(0);
//       this.weatherData.temp_min = Math.round(this.weatherData.main.temp_min - 273.15).toFixed(0);
//       this.weatherData.temp_max = Math.round(this.weatherData.main.temp_max - 273.15).toFixed(0);
//     }
  
//     // Additional data
//     if (this.weatherData && this.weatherData.weather && this.weatherData.weather.length > 0) {
//       this.weatherData.weather_description = this.weatherData.weather[0].description;
//     }
//     if (this.weatherData && this.weatherData.clouds) {
//       this.weatherData.clouds = this.weatherData.clouds.all;
//     }
//     if (this.weatherData && this.weatherData.wind) {
//       this.weatherData.wind_speed = this.weatherData.wind.speed;
//       this.weatherData.wind_direction = this.weatherData.wind.deg;
//       this.weatherData.wind_gust = this.weatherData.wind.gust;
//     }
//     if (this.weatherData && this.weatherData.visibility) {
//       this.weatherData.visibility_meters = this.weatherData.visibility;
//     }
//     if (this.weatherData && this.weatherData.pop) {
//       this.weatherData.pops = this.weatherData.pop * 100;
//     }
//     if (this.weatherData && this.weatherData.sys) {
//       this.weatherData.pod = this.weatherData.sys.pod;
//     }
//     if (this.weatherData && this.weatherData.dt_txt) {
//       this.weatherData.dt_txt = this.weatherData.dt_txt;
//     }
//   }
  


  

  // setWeatherData(data: any) {
  //   this.weatherData = data;
  //   let sunsetTime = new Date(this.weatherData.sys.sunset * 1000);
  //   this.weatherData.sunset_time = sunsetTime.toLocaleTimeString();
  //   let currentDate = new Date();
  //   this.weatherData.isDay = currentDate.getTime() < sunsetTime.getTime();
  //   // this.weatherData.temp_celsius = (this.weatherData.main.temp - 273.15).toFixed(0);
  //   if(this.weatherData && this.weatherData.dt.main){
  //   this.weatherData.temp_celsius = Math.round(this.weatherData.dt.main.temp - 273.15).toFixed(0);
  // }
  //   this.weatherData.temp_feels_like = (this.weatherData.main.feels_like - 273.15).toFixed(0);
  //   this.weatherData.temp_min = (this.weatherData.main.temp_min - 273.15).toFixed(0);
  //   this.weatherData.temp_max = (this.weatherData.main.temp_max - 273.15).toFixed(0);
  
    // this.weather = {
    //   main: {
    //     temp: this.weatherData.main.temp
    //   },
    //   weather: [
    //     {
    //       icon: this.weatherData.weather[0].icon,
    //       description: this.weatherData.weather[0].description
    //     }
    //   ],
    //   dt: this.weatherData.dt
    // };
  
    // const forecastList = this.weatherData.list;
    // this.forecast = forecastList.map((forecastData: any) => {
    //   return {
    //     dt_txt: forecastData.dt_txt,
    //     weather: [
    //       {
    //         icon: forecastData.weather[0].icon
    //       }
    //     ],
    //     main: {
    //       temp: forecastData.main.temp
    //     }
    //   };
    // });
// }
  



















// import { Component, OnInit } from '@angular/core';
// import { WeatherService } from '../weather.service.service';
// //import { WeatherService } from '../weather.service/weather.service';

// @Component({
//   selector: 'app-home-page',
//   templateUrl: './home-page.component.html',
//   styleUrls: ['./home-page.component.css']
// })
// export class HomePageComponent implements OnInit {
//   weatherData: any; // Stores the fetched weather data
//   //constructor(){}
// weather: any;
// forecast: any;

//   constructor(private weatherService: WeatherService) {}

//   ngOnInit(): void {
//     this.getWeatherData(); // Call fetchWeatherData() with the desired location
//     console.log(this.weatherData);
//   }

//   getWeatherData(){
//     let data = JSON.parse()
//     this.setWeatherData(data);
//   }

//   setWeatherData(data){
//     this.weatherData=data;
//     let sunsetTime = new Date(this.weatherData.sys.sunset*1000);
//     this.weatherData.sunset_time = sunsetTime.toLocaleTimeString();
//     let currentDate = new Date();
//     this.weatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
//     this.weatherData.temp_celcius = (this.weatherData.main.temp - 273.15).toFixed(0);
//     this.weatherData.temp_feels_like = (this.weatherData.main.feels_like - 273.15).toFixed(0);
//     this.weatherData.temp_min = (this.weatherData.main.temp_min - 273.15).toFixed(0);
//     this.weatherData.temp_max = (this.weatherData.main.temp_max - 273.15).toFixed(0);

    
//   }

  // fetchWeatherData(location: string) {
  //   this.weatherService.fetchWeatherData(location).subscribe(
  //     (data: any) => {
  //       this.weatherData = data;
  //       console.log(this.weatherData);
  //     },
  //     (error: any) => {
  //       console.error('Failed to fetch weather data:', error);
  //     }
  //   );
  // }
//}
