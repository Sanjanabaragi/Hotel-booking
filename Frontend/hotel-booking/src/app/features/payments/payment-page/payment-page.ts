import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment-page.html',
  styleUrls: ['./payment-page.css']
})
export class PaymentPageComponent implements OnInit {
  paymentForm = {
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  };

  invoiceDetails = {
    item: 'Deluxe Ocean View King — 3 Nights',
    subtotal: 897.00,
    tax: 107.64,
    grandTotal: 1004.64
  };

  isProcessing = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onProcessPayment(): void {
    this.isProcessing = true;
    
    // Simulate payment gateway API handshake
    setTimeout(() => {
      this.isProcessing = false;
      
      // Basic client-side mock testing constraint
      // Typing '0000' triggers a failure simulation, any other number succeeds
      if (this.paymentForm.cardNumber.replace(/\s+/g, '').endsWith('0000')) {
        this.router.navigate(['/payments/payment-failure']);
      } else {
        this.router.navigate(['/payments/payment-success']);
      }
    }, 2000);
  }

  // Basic utility to auto-format card entry with empty spaces
  formatCardNumber(event: any): void {
    let input = event.target.value.replace(/\D/g, '');
    if (input.length > 16) input = input.substring(0, 16);
    
    const formatted = input.match(/.{1,4}/g)?.join(' ') || input;
    this.paymentForm.cardNumber = formatted;
  }
}