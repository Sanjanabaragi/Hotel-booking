import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class AdminDashboardComponent {
  systemMetrics = [
    { label: 'Active Occupancy', value: '78.4%', icon: '🏨' },
    { label: 'Gross Revenue (MTD)', value: '$142,580', icon: '💰' },
    { label: 'Pending Bookings', value: '34', icon: '⏳' },
    { label: 'System Flag Alerts', value: '2', icon: '⚠️' }
  ];

  recentLogs = [
    { item: 'New property registered: "Oceanic Vista Resort"', time: '10 min ago' },
    { item: 'Payout batch #992 cleared successfully', time: '1 hour ago' },
    { item: 'Rate configuration altered for Double Queen Suite', time: '3 hours ago' }
  ];
}