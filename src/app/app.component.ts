import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TripComponent } from './components/trip/trip.component';
import { Trip } from './models/trip.model';
import { TripsService } from './services/trips.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TripComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  trips: Trip[] = [];

  constructor(private tripsService: TripsService) {}

  ngOnInit() {
    this.loadTrips();
  }

  loadTrips(): void {
    this.tripsService.getAllTrips().subscribe(
      response => {
        this.trips = response;
      },
      error => {
        console.error("Ocorreu um erro ao carregar as viagens: " + error);
      }
    )
  }
}
