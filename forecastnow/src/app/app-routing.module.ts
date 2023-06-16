import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
//import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'weather-details', component: WeatherDetailsComponent },
  // Add other routes if needed
  { path: '', redirectTo: '/weather-details', pathMatch: 'full' } // Default route for login page
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule,FormsModule],
  exports: [RouterModule,FormsModule]
})
export class AppRoutingModule { }
