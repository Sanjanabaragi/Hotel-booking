import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.html'
})
export class UsersComponent {
  userProfiles = [
    { name: 'Sarah Jenkins', systemMail: 's.jenkins@hotelres.com', groupRole: 'Property Concierge Operator' },
    { name: 'David Miller', systemMail: 'd.miller@hotelres.com', groupRole: 'Financial Auditor Controller' }
  ];
}