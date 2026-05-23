import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class CustomerProfileComponent implements OnInit {
  profileData = {
    firstName: 'Alex',
    lastName: 'Morgan',
    email: 'alex.morgan@example.com',
    phone: '(555) 019-2834',
    marketingOptIn: true
  };

  isSavedFeedback = false;

  constructor() {}

  ngOnInit(): void {}

  onUpdateProfileRecords(): void {
    this.isSavedFeedback = true;
    setTimeout(() => {
      this.isSavedFeedback = false;
    }, 2500);
  }
}