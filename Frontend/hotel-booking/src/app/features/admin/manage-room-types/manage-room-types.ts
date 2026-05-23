import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-room-types',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manage-room-types.html'
})
export class ManageRoomTypesComponent {
  roomTypes = [
    { key: 'DLX-K', name: 'Deluxe Ocean View King', baseRate: 299, allocation: 45 },
    { key: 'STD-D', name: 'Standard Queen Double', baseRate: 189, allocation: 90 },
    { key: 'VIP-S', name: 'Presidential Penthouse Suite', baseRate: 850, allocation: 5 }
  ];
}