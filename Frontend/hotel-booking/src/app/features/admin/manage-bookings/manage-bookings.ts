import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-manage-bookings',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './manage-bookings.html',
  styleUrl: './manage-bookings.css'
})
export class ManageBookingsComponent {
  bookingsMaster = [
    { invoiceCode: 'BK-9482', client: 'Alex Morgan', space: 'Room 402', stay: 'Jun 12 - Jun 15', status: 'Approved' },
    { invoiceCode: 'BK-1104', client: 'Jordan Smith', space: 'Room 112', stay: 'Jul 20 - Jul 25', status: 'Checked In' }
  ];
}