import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONSTANTS } from '../constants/api.constants';

@Injectable({
  providedIn: 'root',
})
export class Room {
   private apiUrl =
    API_CONSTANTS.BASE_URL + API_CONSTANTS.ROOMS;

  constructor(private http: HttpClient) {}

  getRooms(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getRoomById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
