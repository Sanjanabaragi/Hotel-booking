import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONSTANTS } from '../constants/api.constants';

@Injectable({
  providedIn: 'root',
})
export class Payment {
  private apiUrl =
    API_CONSTANTS.BASE_URL + API_CONSTANTS.PAYMENTS;

  constructor(private http: HttpClient) {}

  processPayment(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
