import { Component } from '@angular/core';
import { TechnologiesService } from '../../../services/technologies.service';
import { Technology } from '../../../Technology';

@Component({
  selector: 'app-capsule',
  templateUrl: './capsule.component.html',
  styleUrls: ['./capsule.component.css']
})
export class CapsuleComponent {
  technology: Technology[] = [];
  capsuleTech: Technology[] = [];

  constructor(private techService: TechnologiesService) { }
  
  ngOnInit(): void {
    this.techService.getTechnologies().subscribe((technology) => {
      this.technology = technology;
      for (let i in technology) {
        if (technology[i].name === 'SPACE CAPSULE') {
          this.capsuleTech.push(technology[i]);
        }
      }
    })
  }
}
