import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONSTANTS } from '../constants/api.constants';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private apiUrl = API_CONSTANTS.BASE_URL;

  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
    return this.http.post(
      this.apiUrl + API_CONSTANTS.AUTH.LOGIN,
      data
    );
  }

  register(data: any): Observable<any> {
    return this.http.post(
      this.apiUrl + API_CONSTANTS.AUTH.REGISTER,
      data
    );
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): void {
    localStorage.clear();
  }
}
