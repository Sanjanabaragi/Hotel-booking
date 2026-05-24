import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class UsersComponent {
  userProfiles = [
    { name: 'Sarah Jenkins', systemMail: 's.jenkins@hotelres.com', groupRole: 'Property Concierge Operator' },
    { name: 'David Miller', systemMail: 'd.miller@hotelres.com', groupRole: 'Financial Auditor Controller' }
  ];
}