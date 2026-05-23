import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONSTANTS } from '../constants/api.constants';


@Injectable({
  providedIn: 'root',
})
export class Booking {
  private apiUrl =
    API_CONSTANTS.BASE_URL + API_CONSTANTS.BOOKINGS;

  constructor(private http: HttpClient) {}

  getBookings(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createBooking(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  cancelBooking(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
