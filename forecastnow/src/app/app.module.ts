import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewMapComponent } from './view-map/view-map.component';
// import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [AppComponent,
    WeatherDetailsComponent,
    LoginComponent,
    RegisterComponent, 
    FavoritesPageComponent, NavbarComponent, ViewMapComponent],
  imports: [BrowserModule, 
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatChipsModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
