import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SystemAlert {
  id: string;
  type: 'security' | 'billing' | 'logistic';
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
}

@Component({
  selector: 'app-customer-notifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications.html',
  styleUrls: ['./notifications.css']
})
export class CustomerNotificationsComponent implements OnInit {
  alerts: SystemAlert[] = [
    {
      id: 'AL-01',
      type: 'logistic',
      title: 'Digital Room Key Released',
      message: 'Your check-in profile for Room 402 at The Grand Waterfront Resort is verified. Key activated inside mobile app.',
      timestamp: '2 hours ago',
      isRead: false
    },
    {
      id: 'AL-02',
      type: 'billing',
      title: 'Invoice Settled — Reference BK-9482',
      message: 'Merchant confirmation loop completed successfully. Charge clearance received.',
      timestamp: '1 day ago',
      isRead: true
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  onMarkAsRead(alertId: string): void {
    const target = this.alerts.find(a => a.id === alertId);
    if (target) target.isRead = true;
  }

  onClearAllAlerts(): void {
    this.alerts = [];
  }
}