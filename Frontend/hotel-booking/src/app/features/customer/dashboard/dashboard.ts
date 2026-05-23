import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-customer-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class CustomerDashboardComponent implements OnInit {
  userSession = {
    firstName: 'Alex',
    loyaltyTier: 'Gold Elite',
    pointsBalance: 24500,
    activeStaysCount: 1
  };

  upcomingStay = {
    hotelName: 'The Grand Waterfront Resort',
    checkIn: 'June 12, 2026',
    room: 'Deluxe Ocean View King'
  };

  constructor() {}

  ngOnInit(): void {}
}