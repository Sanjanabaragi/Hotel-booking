import { Component, OnInit } from '@angular/core';
import { Auth } from '../../../core/services/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  userName = '';

  constructor(private authService: Auth) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();

    const user = this.authService.getCurrentUser();

    if(user) {
      this.userName = user.fullName;
    }
  }

  logout(): void {
    this.authService.logout();
  }
}