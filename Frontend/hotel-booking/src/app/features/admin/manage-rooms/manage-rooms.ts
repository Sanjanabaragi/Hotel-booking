import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-rooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manage-rooms.html'
})
export class ManageRoomsComponent {
  rooms = [
    { property: 'The Grand Waterfront', number: '402', type: 'Deluxe King', housekeeping: 'Clean', availability: 'Occupied' },
    { property: 'The Grand Waterfront', number: '403', type: 'Standard Double', housekeeping: 'Dirty', availability: 'Vacant' },
    { property: 'Breezy Palms Oasis', number: '112', type: 'Ocean Suite', housekeeping: 'Clean', availability: 'Vacant' }
  ];
}