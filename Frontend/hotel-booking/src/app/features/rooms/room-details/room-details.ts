import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-room-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './room-details.html',
  styleUrls: ['./room-details.css']
})
export class RoomDetailsComponent implements OnInit {
  roomData = {
    id: 'r1',
    type: 'Deluxe Ocean View King',
    description: 'Our premier luxury suite featuring floor-to-ceiling glass panel windows looking directly onto the Atlantic reef line. Includes an attached outdoor balcony deck, deep soaking marble bath installations, digital climate regulation, and access to the executive VIP dining floor.',
    pricePerNight: 299,
    images: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80'
    ],
    inclusions: [
      'Smart IPTV Entertainment Rig',
      'Fully Stocked Premium Minibar',
      'Nespresso Espresso Station',
      'Plush Terry Cloth Bathrobes & Slippers',
      'Twice-Daily Housekeeping Service'
    ]
  };

  constructor() {}

  ngOnInit(): void {}
}