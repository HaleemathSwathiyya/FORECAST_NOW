import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  
  constructor(private weathserviService:WeathserviService){}

  climate?:Climate;

  cityName:string='Berlin';

  // cityName: string = 'Berlin';

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



  // @ViewChild("mapContainer", { static: false }) gmap: ElementRef;
  // map: google.maps.Map;
  // lat = 40.73061;
  // lng = -73.935242;

  // markers = [
  //   {
  //     position: new google.maps.LatLng(40.73061, 73.935242),
  //     map: this.map,
  //     title: "Marker 1"
  //   },
  //   {
  //     position: new google.maps.LatLng(32.06485, 34.763226),
  //     map: this.map,
  //     title: "Marker 2"
  //   }
  // ];

  // //Coordinates to set the center of the map
  // coordinates = new google.maps.LatLng(this.lat, this.lng);

  // mapOptions: google.maps.MapOptions = {
  //   center: this.coordinates,
  //   zoom: 8
  // };

  // //Default Marker
  // marker = new google.maps.Marker({
  //   position: this.coordinates,
  //   map: this.map,
  //   title: "Hello World!"
  // });

  // ngAfterViewInit(): void {
  //   this.mapInitializer();
  // }

  // mapInitializer(): void {
  //   this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);

  //   //Adding Click event to default marker
  //   this.marker.addListener("click", () => {
  //     const infoWindow = new google.maps.InfoWindow({
  //       content: this.marker.getTitle()
  //     });
  //     infoWindow.open(this.marker.getMap(), this.marker);
  //   });

  //   //Adding default marker to map
  //   this.marker.setMap(this.map);

  //   //Adding other markers
  //   this.loadAllMarkers();
  // }

  // loadAllMarkers(): void {
  //   this.markers.forEach(markerInfo => {
  //     //Creating a new marker object
  //     const marker = new google.maps.Marker({
  //       ...markerInfo
  //     });

  //     //creating a new info window with markers info
  //     const infoWindow = new google.maps.InfoWindow({
  //       content: marker.getTitle()
  //     });

  //     //Add click event to open info window on marker
  //     marker.addListener("click", () => {
  //       infoWindow.open(marker.getMap(), marker);
  //     });

  //     //Adding marker to google map
  //     marker.setMap(this.map);
  //   });
  // }




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

