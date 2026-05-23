import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface HotelCard {
  id: string;
  name: string;
  location: string;
  pricePerNight: number;
  rating: number;
  reviewsCount: number;
  imageUrl: string;
  amenities: string[];
}

@Component({
  selector: 'app-hotel-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hotel-list.html',
  styleUrls: ['./hotel-list.css']
})
export class HotelListComponent implements OnInit {
  // Local standalone mock array mimicking server feedback
  hotels: HotelCard[] = [
    {
      id: 'h1',
      name: 'The Grand Waterfront Resort',
      location: 'Manhattan, New York',
      pricePerNight: 299,
      rating: 4.8,
      reviewsCount: 312,
      imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      amenities: ['Free WiFi', 'Pool', 'Spa', 'Gym']
    },
    {
      id: 'h2',
      name: 'Alpine Vista Ski Lodge',
      location: 'Aspen, Colorado',
      pricePerNight: 420,
      rating: 4.9,
      reviewsCount: 184,
      imageUrl: 'https://images.unsplash.com/photo-1518733057074-95660295853e?auto=format&fit=crop&w=600&q=80',
      amenities: ['Ski-in/Ski-out', 'Fireplace', 'Hot Tub', 'Bar']
    },
    {
      id: 'h3',
      name: 'Breezy Palms Beach Oasis',
      location: 'Miami, Florida',
      pricePerNight: 185,
      rating: 4.5,
      reviewsCount: 520,
      imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80',
      amenities: ['Beachfront', 'Free WiFi', 'Restaurant']
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}