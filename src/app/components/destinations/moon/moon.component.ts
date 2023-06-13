import { Component } from '@angular/core';
import { DestinationsService } from '../../../services/destinations.service';
import { Destination } from '../../../Destination';

@Component({
  selector: 'app-moon',
  templateUrl: './moon.component.html',
  styleUrls: ['./moon.component.css']
})
export class MoonComponent {
  destinations: Destination[] = [];
  moonDest: Destination[] = [];

  constructor(private destinationService: DestinationsService) {}

  ngOnInit(): void {
    this.destinationService.getDestinations().subscribe((destinations) => {
      this.destinations = destinations;
      for (let i in destinations) {
        if (destinations[i].name === 'MOON') {
          this.moonDest.push(destinations[i]);
        }
      }
    })
  }
}
