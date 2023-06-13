import { Component } from '@angular/core';
import { CrewsService } from '../../../services/crews.service';
import { Crew } from '../../../Crew';

@Component({
  selector: 'app-douglas',
  templateUrl: './douglas.component.html',
  styleUrls: ['./douglas.component.css']
})
export class DouglasComponent {
  crew: Crew[] = [];
  douglasMem: Crew[] = [];

  constructor(private crewService: CrewsService) { }
  
  ngOnInit(): void {
    this.crewService.getCrews().subscribe((crew) => {
      this.crew = crew;
      for (let i in crew) {
        if (crew[i].name === 'DOUGLAS HURLEY') {
          this.douglasMem.push(crew[i]);
        }
      }
    })
  }
}
