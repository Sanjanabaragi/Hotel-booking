import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  userName = '';

  constructor(private authService: AuthService) {}

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