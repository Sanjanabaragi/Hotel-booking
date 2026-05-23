import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cancel-booking',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './cancel-booking.html',
  styleUrls: ['./cancel-booking.css']
})
export class CancelBookingComponent implements OnInit {
  bookingId = 'BK-9482';
  hotelName = 'The Grand Waterfront Resort';
  refundEligibility = true; // True if within safe cancellation timeline limits
  
  cancellationReason = '';
  confirmCheckbox = false;
  isSubmitting = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onExecuteCancellation(): void {
    this.isSubmitting = true;
    
    // Simulate API pipeline drop handling
    setTimeout(() => {
      this.isSubmitting = false;
      alert(`Reservation ${this.bookingId} has been successfully wiped. Refund execution issued.`);
      this.router.navigate(['/bookings/booking-list']);
    }, 1200);
  }
}