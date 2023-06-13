import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Technology } from '../Technology';

@Injectable({
  providedIn: 'root'
})
export class TechnologiesService {
  private apiUrl: string = 'http://localhost:3000/technology';

  constructor(private httpTech: HttpClient) { }

  getTechnologies(): Observable<Technology[]> {
    return this.httpTech.get<Technology[]>(this.apiUrl);
  }
}
