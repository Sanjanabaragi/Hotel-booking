import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-manage-rooms',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './manage-rooms.html',
  styleUrl: './manage-rooms.css'
})
export class ManageRoomsComponent {
  rooms = [
    { property: 'The Grand Waterfront', number: '402', type: 'Deluxe King', housekeeping: 'Clean', availability: 'Occupied' },
    { property: 'The Grand Waterfront', number: '403', type: 'Standard Double', housekeeping: 'Dirty', availability: 'Vacant' },
    { property: 'Breezy Palms Oasis', number: '112', type: 'Ocean Suite', housekeeping: 'Clean', availability: 'Vacant' }
  ];
}