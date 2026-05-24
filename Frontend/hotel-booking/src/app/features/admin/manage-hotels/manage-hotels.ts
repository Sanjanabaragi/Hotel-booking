import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-manage-hotels',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './manage-hotels.html',
  styleUrl: './manage-hotels.css'
})
export class ManageHotelsComponent {
  hotels = [
    { id: 'H-101', name: 'The Grand Waterfront Resort', location: 'Manhattan, NY', totalRooms: 240, status: 'Active' },
    { id: 'H-102', name: 'Breezy Palms Beach Oasis', location: 'Miami, FL', totalRooms: 115, status: 'Active' },
    { id: 'H-103', name: 'Alpine Peak Ski Lodge', location: 'Aspen, CO', totalRooms: 85, status: 'Maintenance' }
  ];
}