import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface HistoricStay {
  pastId: string;
  destinationName: string;
  stayDates: string;
  totalCost: number;
  invoiceState: 'Settled' | 'Disputed' | 'Refunded';
}

@Component({
  selector: 'app-customer-booking-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-history.html',
  styleUrls: ['./booking-history.css']
})
export class BookingHistoryComponent implements OnInit {
  historyRecords: HistoricStay[] = [
    { pastId: 'BK-1104', destinationName: 'Breezy Palms Beach Oasis', stayDates: 'Feb 14 - Feb 17, 2026', totalCost: 621.60, invoiceState: 'Settled' },
    { pastId: 'BK-0912', destinationName: 'Alpine Peak Ski Lodge', stayDates: 'Dec 20 - Dec 23, 2025', totalCost: 1145.00, invoiceState: 'Settled' },
    { pastId: 'BK-8841', destinationName: 'Urban Metro Suite Indigo', stayDates: 'Oct 04 - Oct 05, 2025', totalCost: 189.00, invoiceState: 'Refunded' }
  ];

  constructor() {}

  ngOnInit(): void {}
}