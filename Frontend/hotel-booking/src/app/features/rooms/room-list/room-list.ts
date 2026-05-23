import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface RoomCard {
  id: string;
  type: string;
  capacity: string;
  bedType: string;
  sizeSqFt: number;
  pricePerNight: number;
  imageUrl: string;
  isAvailable: boolean;
}

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './room-list.html',
  styleUrls: ['./room-list.css']
})
export class RoomListComponent implements OnInit {
  rooms: RoomCard[] = [
    {
      id: 'r1',
      type: 'Deluxe Ocean View King',
      capacity: '2 Adults, 1 Child',
      bedType: '1 King Size Bed',
      sizeSqFt: 450,
      pricePerNight: 299,
      imageUrl: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=500&q=80',
      isAvailable: true
    },
    {
      id: 'r2',
      type: 'Executive Twin Suite',
      capacity: '2 Adults, 2 Children',
      bedType: '2 Queen Beds',
      sizeSqFt: 580,
      pricePerNight: 350,
      imageUrl: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=500&q=80',
      isAvailable: true
    },
    {
      id: 'r3',
      type: 'Presidential Penthouse',
      capacity: '4 Adults',
      bedType: '2 King Beds, Private Lounge',
      sizeSqFt: 1200,
      pricePerNight: 899,
      imageUrl: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=500&q=80',
      isAvailable: false
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}