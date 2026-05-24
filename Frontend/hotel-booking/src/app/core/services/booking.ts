import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class Booking {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getBookings(): Observable<any> {
    return this.http.get(`${this.apiUrl}/bookings`);
  }

  createBooking(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/bookings`, data);
  }

  cancelBooking(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/bookings/${id}`);
  }
}
