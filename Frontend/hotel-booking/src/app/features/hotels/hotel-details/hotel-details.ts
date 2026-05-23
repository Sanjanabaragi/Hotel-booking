import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface DetailedHotel {
  name: string;
  location: string;
  description: string;
  rating: number;
  basePrice: number;
  images: string[];
  features: string[];
  policies: string[];
}

@Component({
  selector: 'app-hotel-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hotel-details.html',
  styleUrls: ['./hotel-details.css']
})
export class HotelDetailsComponent implements OnInit {
  selectedImageIndex = 0;

  // Single mock entity template containing details
  hotelData: DetailedHotel = {
    name: 'The Grand Waterfront Resort',
    location: 'Manhattan, New York',
    description: 'Experience pure opulence at this flagship luxury destination located directly overlooking the historic harbor skyline. Features modern interior architecture, tailored 24/7 concierge operations, world-class signature restaurants managed by Michelin starred chefs, and comprehensive physical wellness spas.',
    rating: 4.8,
    basePrice: 299,
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'Complimentary Ultra High-Speed Fiber WiFi',
      'Heated Olympic Infinity Swimming Pool',
      'Subterranean Secure Valet Parking Garages',
      'Fully Equipped Fitness Matrix & Training Studio',
      'In-Room Smart Home Control Interfaces'
    ],
    policies: [
      'Check-in: 3:00 PM onwards',
      'Check-out: Before 11:00 AM',
      'Cancellation: Free up to 48 hours prior to reservation schedule',
      'Pets: Small domesticated companions permitted under 25 lbs'
    ]
  };

  constructor() {}

  ngOnInit(): void {}

  setHeroImage(index: number): void {
    this.selectedImageIndex = index;
  }

  onInitiateBooking(): void {
    alert(`Navigating to reservation system workflow for: ${this.hotelData.name}`);
  }
}