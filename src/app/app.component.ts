import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { bootstrapApplication } from '@angular/platform-browser';
// import { GoogleMapsModule } from '@angular/google-maps';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LocationService } from './location/location.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, RouterModule,HttpClientModule],
  providers: [LocationService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'SeaBots';


}
