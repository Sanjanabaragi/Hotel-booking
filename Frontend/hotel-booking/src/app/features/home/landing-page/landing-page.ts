import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './landing-page.html',
  styleUrls: ['./landing-page.css']
})
export class LandingPageComponent implements OnInit {
  featuredDestinations = [
    { name: 'Paris', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80', description: 'Experience the city of lights and world-class luxury.' },
    { name: 'Maldives', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=400&q=80', description: 'Unwind in overwater bungalows and crystal clear lagoons.' },
    { name: 'Tokyo', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=400&q=80', description: 'Explore futuristic skylines matched with historic temples.' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToRegister(): void {
    this.router.navigate(['/auth/register']);
  }
}