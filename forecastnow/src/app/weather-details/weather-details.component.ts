import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { Climate } from 'src/model/weather.model';
import { WeathserviService } from '../weathservi.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit{

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

  //   const navigationExtras: NavigationExtras = {
  //     state: {
  //       cityName: this.cityName
  //     }
  //   };

  //   this.weathserviService.navigate(['/favorites-page'], navigationExtras);
  // }

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
