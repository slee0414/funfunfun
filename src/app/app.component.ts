import {Component, Inject} from '@angular/core';
import {GoogleMapsAPIWrapper} from "@agm/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title: string = 'Grace is awesome';

  // default location is Seoul
  public lat: number = 37.532600;
  public lng: number = 127.024612;

  constructor(@Inject (GoogleMapsAPIWrapper) public googleApi) {
    // check for Geolocation support
    if (navigator.geolocation) {
      console.log('Geolocation is supported!');
    }
    else {
      console.log('Geolocation is not supported for this Browser/OS.');
    }

    let position = navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude
    });
  }

}
