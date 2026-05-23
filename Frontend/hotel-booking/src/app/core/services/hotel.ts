import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONSTANTS } from '../constants/api.constants';

@Injectable({
  providedIn: 'root',
})
export class Hotel {
  private apiUrl =
    API_CONSTANTS.BASE_URL + API_CONSTANTS.HOTELS;

  constructor(private http: HttpClient) {}

  getHotels(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
