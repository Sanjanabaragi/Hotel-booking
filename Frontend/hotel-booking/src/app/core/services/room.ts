import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Room {
   private apiUrl =
    `${environment.apiUrl}/rooms`;

  constructor(private http: HttpClient) {}

  getRooms(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getRoomById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
