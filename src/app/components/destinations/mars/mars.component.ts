import { Component } from '@angular/core';
import { DestinationsService } from '../../../services/destinations.service';
import { Destination } from '../../../Destination';

@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.css']
})
export class MarsComponent {
  destinations: Destination[] = [];
  marsDest: Destination[] = [];

  constructor(private destinationService: DestinationsService) { }
  
  ngOnInit(): void {
    this.destinationService.getDestinations().subscribe((destinations) => {
      this.destinations = destinations;
      for (let i in destinations) {
        if (destinations[i].name === 'MARS') {
          this.marsDest.push(destinations[i]);
        }
      }
    })
  }
}
