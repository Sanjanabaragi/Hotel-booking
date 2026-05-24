import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-reports',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './reports.html',
  styleUrl: './reports.css'
})
export class ReportsComponent {
  kpis = [
    { metric: 'ADR (Average Daily Rate)', measure: '$244.50', status: 'Optimal' },
    { metric: 'RevPAR (Revenue Per Available Room)', measure: '$191.68', status: 'Stable' },
    { metric: 'Net Margin Yield Calculation', measure: '24.1%', status: 'Optimal' }
  ];
}