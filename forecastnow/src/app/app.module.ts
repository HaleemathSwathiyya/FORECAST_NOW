import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

//import { AppComponent } from './app.component';
//import { HomePageComponent } from './home-page/home-page.component';
//import { WeatherService } from './weather.service/weather.service.component';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { WeatherService } from './weather.service.service';
import { AppRoutingModule } from './app-routing.module';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [AppComponent,WeatherDetailsComponent,LoginComponent,RegisterComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
