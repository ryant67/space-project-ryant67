import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Destination } from '../Destination';

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {
  private apiUrl: string = 'http://localhost:3000/destinations';


  constructor(private httpDest: HttpClient) { }

  getDestinations(): Observable<Destination[]> {
    return this.httpDest.get<Destination[]>(this.apiUrl);
  }
}
