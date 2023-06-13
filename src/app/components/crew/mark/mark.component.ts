import { Component } from '@angular/core';
import { CrewsService } from '../../../services/crews.service';
import { Crew } from '../../../Crew';

@Component({
  selector: 'app-mark',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.css']
})
export class MarkComponent {
  crew: Crew[] = [];
  markMem: Crew[] = [];

  constructor(private crewService: CrewsService) {}

  ngOnInit(): void {
    this.crewService.getCrews().subscribe((crew) => {
      this.crew = crew;
      for (let i in crew) {
        if (crew[i].name === 'MARK SHUTTLEWORTH') {
          this.markMem.push(crew[i]);
        }
      }
    })
  }
}
