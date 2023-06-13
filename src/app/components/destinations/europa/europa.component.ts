import { Component } from '@angular/core';
import { DestinationsService } from '../../../services/destinations.service';
import { Destination } from '../../../Destination';

@Component({
  selector: 'app-europa',
  templateUrl: './europa.component.html',
  styleUrls: ['./europa.component.css']
})
export class EuropaComponent {
  destinations: Destination[] = [];
  europaDest: Destination[] = [];

  constructor(private destinationService: DestinationsService) { }
  
  ngOnInit(): void {
    this.destinationService.getDestinations().subscribe((destinations) => {
      this.destinations = destinations;
      for (let i in destinations) {
        if (destinations[i].name === 'EUROPA') {
          this.europaDest.push(destinations[i]);
        }
      }
    })
  }
}
