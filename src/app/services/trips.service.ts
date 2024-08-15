import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trip } from '../models/trip.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripsService {
  url: string = 'http://localhost:8080/trips'
  trips: Trip[] = [];

  constructor(private httpClient: HttpClient) { }

  getAllTrips(): Observable<Trip[]> {
    return this.httpClient.get<Trip[]>(this.url);
  }

  getTripById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/${id}`)
  }
}
