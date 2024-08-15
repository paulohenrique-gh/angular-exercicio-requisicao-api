import { Component, Input } from '@angular/core';
import { Trip } from '../../models/trip.model';

@Component({
  selector: 'app-trip',
  standalone: true,
  imports: [],
  templateUrl: './trip.component.html',
  styleUrl: './trip.component.css'
})
export class TripComponent {
  @Input() trip: Trip = {
    id: 0,
    title: '',
    startDate: '',
    endDate: '',
    imageUrl: '',
    destination: {
      id: 0,
      name: '',
      country: ''
    }
  }
}
