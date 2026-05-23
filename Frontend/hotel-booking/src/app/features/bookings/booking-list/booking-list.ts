import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface BookingRecord {
  id: string;
  hotelName: string;
  roomType: string;
  checkIn: string;
  checkOut: string;
  totalCost: number;
  status: 'Upcoming' | 'Completed' | 'Cancelled';
  imageUrl: string;
}

@Component({
  selector: 'app-booking-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './booking-list.html',
  styleUrls: ['./booking-list.css']
})
export class BookingListComponent implements OnInit {
  bookings: BookingRecord[] = [
    {
      id: 'BK-9482',
      hotelName: 'The Grand Waterfront Resort',
      roomType: 'Deluxe Ocean View King',
      checkIn: '2026-06-12',
      checkOut: '2026-06-15',
      totalCost: 1004.64,
      status: 'Upcoming',
      imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'BK-1104',
      hotelName: 'Breezy Palms Beach Oasis',
      roomType: 'Standard Queen Double',
      checkIn: '2026-02-14',
      checkOut: '2026-02-17',
      totalCost: 621.60,
      status: 'Completed',
      imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=400&q=80'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}