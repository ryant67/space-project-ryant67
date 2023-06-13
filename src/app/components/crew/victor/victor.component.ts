import { Component } from '@angular/core';
import { CrewsService } from '../../../services/crews.service';
import { Crew } from '../../../Crew';

@Component({
  selector: 'app-victor',
  templateUrl: './victor.component.html',
  styleUrls: ['./victor.component.css']
})
export class VictorComponent {
  crew: Crew[] = [];
  victorMem: Crew[] = [];

  constructor(private crewService: CrewsService) {}

  ngOnInit(): void {
    this.crewService.getCrews().subscribe((crew) => {
      this.crew = crew;
      for (let i in crew) {
        if (crew[i].name === 'VICTOR GLOVER') {
          this.victorMem.push(crew[i]);
        }
      }
    })
  }
}
