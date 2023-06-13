import { Component } from '@angular/core';
import { TechnologiesService } from '../../../services/technologies.service';
import { Technology } from '../../../Technology';

@Component({
  selector: 'app-spaceport',
  templateUrl: './spaceport.component.html',
  styleUrls: ['./spaceport.component.css']
})
export class SpaceportComponent {
  technology: Technology[] = [];
  spaceportTech: Technology[] = [];

  constructor(private techService: TechnologiesService) { }
  
  ngOnInit(): void {
    this.techService.getTechnologies().subscribe((technology) => {
      this.technology = technology;
      for (let i in technology) {
        if (technology[i].name === 'SPACEPORT') {
          this.spaceportTech.push(technology[i]);
        }
      }
    })
  }
}
