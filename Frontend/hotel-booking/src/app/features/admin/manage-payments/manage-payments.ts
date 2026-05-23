import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-payments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manage-payments.html'
})
export class ManagePaymentsComponent {
  paymentsLog = [
    { gatewayId: 'TXN-8849', customer: 'A. Morgan', clearedVal: 1004.64, mechanism: 'Visa (*4242)', state: 'Settled' },
    { gatewayId: 'TXN-1049', customer: 'J. Smith', clearedVal: 720.00, mechanism: 'Amex (*1001)', state: 'Escrow_Hold' }
  ];
}