import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-cancellations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cancellations.html'
})
export class CancellationsComponent {
  refundQueue = [
    { reference: 'BK-0012', client: 'Sarah Connor', penalty: 50.00, refundIssued: 250.00, approvalState: 'Pending_Review' }
  ];
}