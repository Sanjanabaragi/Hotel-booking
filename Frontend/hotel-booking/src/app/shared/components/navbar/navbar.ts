import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Auth } from '../../../core/services/auth';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  imports: [CommonModule, RouterModule]
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  userName = '';
  userRole = '';
  isAdmin = false;
  isCustomer = false;

  constructor(private auth: Auth, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.auth.isLoggedIn();
    this.userRole = localStorage.getItem('role') || '';
    this.isAdmin = this.userRole === 'Admin';
    this.isCustomer = this.userRole === 'Customer';

    const user = this.auth.getCurrentUser();
    if (user) {
      this.userName = user.fullName;
    }
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/home']);
  }
}