import { Component } from '@angular/core';
import { DestinationsService } from '../../../services/destinations.service';
import { Destination } from '../../../Destination';

@Component({
  selector: 'app-titan',
  templateUrl: './titan.component.html',
  styleUrls: ['./titan.component.css']
})
export class TitanComponent {
  destinations: Destination[] = [];
  titanDest: Destination[] = [];

  constructor(private destinationService: DestinationsService) {}

  ngOnInit(): void {
    this.destinationService.getDestinations().subscribe((destinations) => {
      this.destinations = destinations;
      for (let i in destinations) {
        if (destinations[i].name === 'TITAN') {
          this.titanDest.push(destinations[i]);
        }
      }
    })
  }
}
