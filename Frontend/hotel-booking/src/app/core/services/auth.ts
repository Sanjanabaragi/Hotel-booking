import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
    return this.http.post( 
       `${this.apiUrl}/auth/login`,
      data
    );
  }

  register(data: any): Observable<any> {
    return this.http.post(
       `${this.apiUrl}/auth/register`,
      data
    );
  }

  saveToken(token: string): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('token', token);
    }
  }

  getToken(): string | null {
    if (typeof localStorage === 'undefined') {
      return null;
    }

    return localStorage.getItem('token');
  }

  getCurrentUser(): { fullName: string } | null {
    if (typeof localStorage === 'undefined') {
      return null;
    }

    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  }

  isLoggedIn(): boolean {
    if (typeof localStorage === 'undefined') {
      return false;
    }

    return !!localStorage.getItem('token');
  }

  logout(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.clear();
    }
  }
}
