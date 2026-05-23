import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-room-booking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './room-booking.html',
  styleUrls: ['./room-booking.css']
})
export class RoomBookingComponent implements OnInit {
  bookingForm = {
    fullName: '',
    email: '',
    phone: '',
    specialRequests: '',
    agreeToTerms: false
  };

  roomSummary = {
    type: 'Deluxe Ocean View King',
    nights: 3,
    rate: 299,
    taxPercentage: 0.12 // 12% Local hospitality tax
  };

  constructor() {}

  ngOnInit(): void {}

  getCalculatedBase(): number {
    return this.roomSummary.nights * this.roomSummary.rate;
  }

  getCalculatedTax(): number {
    return this.getCalculatedBase() * this.roomSummary.taxPercentage;
  }

  getGrandTotal(): number {
    return this.getCalculatedBase() + this.getCalculatedTax();
  }

  onSubmitBooking(): void {
    console.log('Publishing Reservation Request payload:', this.bookingForm);
    alert(`Success! Reservation confirmation pending. Final Total charged: $${this.getGrandTotal()}`);
  }
}