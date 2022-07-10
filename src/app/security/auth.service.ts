import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { Authentication } from './authentication';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authentication: Authentication = {} as Authentication;

  constructor(private http: HttpClient) {
    this.getPrincipal().subscribe({next: (authentication) => this.authentication = authentication, error: _ => null});
  }

  getPrincipal(): Observable<any> {
    return this.http.get('/api/auth');
  }

  login(username: string, password: string): Promise<void> {
    return firstValueFrom(this.http.post<{token: string}>('api/login', {username, password}))
      .then(value => localStorage.setItem('token', value.token));
  }

  logout(): void {
    this.authentication = {} as Authentication;
    localStorage.removeItem('token');
  }

  isLogedIn(): boolean {
    return this.authentication?.authenticated;
  }

  isAdmin(): boolean {
    return this.authentication?.authorities?.find(authority => authority.authority == 'ADMIN')?.authority != null;
  }

}
