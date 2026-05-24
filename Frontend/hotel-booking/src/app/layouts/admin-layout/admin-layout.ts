import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './admin-layout.html',
  styleUrls: ['./admin-layout.css']
})
export class AdminLayoutComponent {

  sidebarCollapsed = false;

  toggleSidebar(): void {

    this.sidebarCollapsed =
      !this.sidebarCollapsed;

  }

}