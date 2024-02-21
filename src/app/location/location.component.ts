import { Component } from '@angular/core';
import { LocationService } from './location.service'; // Import LocationService

@Component({
  selector: 'app-location',
  styleUrls: ['./location.component.css'], // Use styleUrls instead of styleUrl
  templateUrl: './location.component.html',
})

export class LocationComponent {
  constructor(private locationService: LocationService) {}

  getLocation(): void {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        console.log(latitude + " " + longitude)


        

        // Send location data to the server using the LocationService
      //   this.locationService.sendLocation(latitude, longitude)
      //     .subscribe(
      //       () => {
      //         console.log("Location sent successfully");
      //       },
      //       (error) => {
      //         console.error("Error sending location: ", error);
      //       }
      //     );
     });
    } else {
      console.error("Geolocation is not supported by this browser");
    }
  }
}
