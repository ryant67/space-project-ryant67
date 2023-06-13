import { Component } from '@angular/core';
import { TechnologiesService } from '../../../services/technologies.service';
import { Technology } from '../../../Technology';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  technology: Technology[] = [];
  vehicleTech: Technology[] = [];

  constructor(private techService: TechnologiesService) { }
  
  ngOnInit(): void {
    this.techService.getTechnologies().subscribe((technology) => {
      this.technology = technology;
      for (let i in technology) {
        if (technology[i].name === 'LAUNCH VEHICLE') {
          this.vehicleTech.push(technology[i]);
        }
      }
    })
  }
}
