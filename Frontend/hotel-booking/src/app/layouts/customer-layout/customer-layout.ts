import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-customer-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SharedModule],
  templateUrl: './customer-layout.html',
  styleUrls: ['./customer-layout.css'],
})
export class CustomerLayoutComponent  {}
