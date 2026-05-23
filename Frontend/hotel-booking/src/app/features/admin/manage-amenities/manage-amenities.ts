import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-amenities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manage-amenities.html'
})
export class ManageAmenitiesComponent {
  amenities = [
    { uid: 'AM-01', featureName: 'High-Velocity Enterprise Wi-Fi', billingMode: 'Complimentary' },
    { uid: 'AM-02', featureName: 'Subterranean Valet Parking Lockers', billingMode: '$35 / Daily' },
    { uid: 'AM-03', featureName: 'All-Inclusive Thermal Spa Token Passes', billingMode: '$50 / Session' }
  ];
}