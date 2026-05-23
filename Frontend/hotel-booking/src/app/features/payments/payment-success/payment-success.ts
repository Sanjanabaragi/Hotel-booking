import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-payment-success',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './payment-success.html',
  styleUrls: ['./payment-success.css']
})
export class PaymentSuccessComponent implements OnInit {
  transactionId = 'TXN-88491024-NY';
  amountCleared = 1004.64;

  constructor() {}

  ngOnInit(): void {}
}