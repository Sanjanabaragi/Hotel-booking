import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.css']
})
export class HomePageComponent implements OnInit {
  upcomingBookings = [
    { hotelName: 'Grand Hyatt Regency', roomType: 'Deluxe King Suite', checkIn: '2026-06-12', checkOut: '2026-06-15', status: 'Confirmed' }
  ];

  recommendedHotels = [
    { name: 'The Ritz-Carlton Resort', location: 'Maui, Hawaii', price: 450, rating: 4.9, image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=400&q=80' },
    { name: 'Aman Tokyo Luxury Stay', location: 'Chiyoda City, Tokyo', price: 820, rating: 5.0, image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=400&q=80' }
  ];

  constructor() {}

  ngOnInit(): void {}
}