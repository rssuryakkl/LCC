import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export interface SignupRequest {
  fullName: string;
  username: string;
  email: string;
  mobileNumber: string;
  password: string;
  confirmPassword: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private get baseUrl(): string {
    const host = typeof window !== 'undefined' && window.location.hostname ? window.location.hostname : 'localhost';
    return `http://${host}:5000/api/auth`;
  }

  constructor(private http: HttpClient) {}

  signup(data: SignupRequest): Observable<any> {
    console.log('Signup Request Payload:', data);

    return this.http.post<any>(`${this.baseUrl}/signup`, data).pipe(
      tap({
        next: (response) => {
          console.log('Signup API Response:', response);
          if (typeof window !== 'undefined' && window.localStorage) {
            localStorage.setItem('currentUser', JSON.stringify({
              fullName: data.fullName,
              username: data.username,
              email: data.email
            }));
          }
        },
        error: (error) => {
          console.error('Signup API Error:', error);
          console.error('Backend Error Response:', error.error);
        }
      })
    );
  }

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, credentials).pipe(
      tap({
        next: (response) => {
          console.log('Login Response:', response);
          if (typeof window !== 'undefined' && window.localStorage) {
            if (response.token) {
              localStorage.setItem('authToken', response.token);
            }
            if (response.user) {
              localStorage.setItem('currentUser', JSON.stringify(response.user));
            }
          }
        },
        error: (error) => {
          console.error('Login Error:', error);
        }
      })
    );
  }
}
