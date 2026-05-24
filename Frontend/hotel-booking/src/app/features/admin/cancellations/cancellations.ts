import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-cancellations',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cancellations.html',
  styleUrl: './cancellations.css'
})
export class CancellationsComponent {
  refundQueue = [
    { reference: 'BK-0012', client: 'Sarah Connor', penalty: 50.00, refundIssued: 250.00, approvalState: 'Pending_Review' }
  ];
}