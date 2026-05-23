import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hotel-search.html',
  styleUrls: ['./hotel-search.css']
})
export class HotelSearchComponent implements OnInit {
  searchQuery = {
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: 1
  };

  popularLocations = ['New York', 'London', 'Paris', 'Tokyo', 'Dubai', 'Maldives'];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Initialize default dates (today and tomorrow)
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    this.searchQuery.checkIn = today.toISOString().split('T')[0];
    this.searchQuery.checkOut = tomorrow.toISOString().split('T')[0];
  }

  onSearch(): void {
    console.log('Executing search parameters:', this.searchQuery);
    
    // Simulate navigation to the hotel-list with state payload
    // Once routing is wired up, this passes query parameters seamlessly
    alert(`Searching for properties in "${this.searchQuery.destination || 'All Destinations'}"`);
  }

  selectLocation(location: string): void {
    this.searchQuery.destination = location;
  }
}