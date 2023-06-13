import { Component } from '@angular/core';
import { CrewsService } from '../../../services/crews.service';
import { Crew } from '../../../Crew';

@Component({
  selector: 'app-anousheh',
  templateUrl: './anousheh.component.html',
  styleUrls: ['./anousheh.component.css']
})
export class AnoushehComponent {
  crew: Crew[] = [];
  anoushehMem: Crew[] = [];

  constructor(private crewService: CrewsService) {}

  ngOnInit(): void {
    this.crewService.getCrews().subscribe((crew) => {
      this.crew = crew;
      for (let i in crew) {
        if (crew[i].name === 'ANOUSHEH ANSARI') {
          this.anoushehMem.push(crew[i]);
        }
      }
    })
  }
}
