import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-booking-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './booking-details.html',
  styleUrls: ['./booking-details.css']
})
export class BookingDetailsComponent implements OnInit {
  bookingData = {
    id: 'BK-9482',
    hotelName: 'The Grand Waterfront Resort',
    location: 'Manhattan, New York',
    roomType: 'Deluxe Ocean View King',
    guests: '2 Adults',
    checkIn: '2026-06-12',
    checkInTime: '3:00 PM',
    checkOut: '2026-06-15',
    checkOutTime: '11:00 AM',
    paymentMethod: 'Visa ending in 4242',
    basePrice: 897.00,
    taxes: 107.64,
    grandTotal: 1004.64,
    status: 'Upcoming'
  };

  constructor() {}

  ngOnInit(): void {}

  onPrintReceipt(): void {
    window.print();
  }
}