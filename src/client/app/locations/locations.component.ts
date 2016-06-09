import { Component, OnInit } from '@angular/core';
import { Location } from './location.model';
import { LocationService } from './location.service';
import { LocationComponent } from './location.component';

@Component({
  moduleId: module.id,
  selector: 'app-locations',
  templateUrl: 'locations.component.html',
  styleUrls: ['../../css/main.css', 'locations.component.css'],
  directives: [LocationComponent],
  providers: [LocationService]
})
export class LocationsComponent implements OnInit {
  locations: Location[];
  selectedLocation: Location;

  constructor(private locationService: LocationService) {}

  ngOnInit() {
    this.locationService.getAll()
      .subscribe(locations => this.locations = locations);
  }

  onSelect(location: Location) {
    this.selectedLocation = location;
  }

  onNewLocation() {
    this.selectedLocation = new Location();
  }

}
