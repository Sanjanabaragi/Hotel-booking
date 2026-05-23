import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-room-availability',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './room-availability.html',
  styleUrls: ['./room-availability.css']
})
export class RoomAvailabilityComponent implements OnInit {
  filterCriteria = {
    checkInDate: '',
    roomClass: 'all'
  };

  isCheckingStatus = false;
  hasChecked = false;
  availabilityOutcome = '';

  constructor() {}

  ngOnInit(): void {}

  onCheckAvailability(): void {
    this.isCheckingStatus = true;
    this.hasChecked = false;

    // Simulate reactive API handshake round-tripping
    setTimeout(() => {
      this.isCheckingStatus = false;
      this.hasChecked = true;
      
      // Basic deterministic toggle logic depending on selection
      if (this.filterCriteria.roomClass === 'penthouse') {
        this.availabilityOutcome = 'limited';
      } else {
        this.availabilityOutcome = 'available';
      }
    }, 900);
  }
}