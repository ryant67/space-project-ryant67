import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Crew } from '../Crew';


@Injectable({
  providedIn: 'root'
})
export class CrewsService {
  private apiUrl: string = 'http://localhost:3000/crew';

  constructor(private httpCrew: HttpClient) { }

  getCrews(): Observable<Crew[]> {
    return this.httpCrew.get<Crew[]>(this.apiUrl);
  }
}
