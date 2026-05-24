import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
=======
>>>>>>> 462dd22762710153fd34e103e7d67f66a91e32c2
import { Auth } from '../../../core/services/auth';

@Component({
  selector: 'app-navbar',
<<<<<<< HEAD
  standalone: true,
  templateUrl: './navbar.html',
  imports: [CommonModule, RouterModule]
=======
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
>>>>>>> 462dd22762710153fd34e103e7d67f66a91e32c2
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  userName = '';
  userRole = '';
  isAdmin = false;
  isCustomer = false;

<<<<<<< HEAD
  constructor(private auth: Auth, private router: Router) {}
=======
  constructor(private authService: Auth) {}
>>>>>>> 462dd22762710153fd34e103e7d67f66a91e32c2

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