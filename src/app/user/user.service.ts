import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>('/api/users');
  }

  getByUsername(username: string): Observable<User> {
    return this.http.get<User>('/api/users/' + username);
  }

  save(user: User): Observable<User> {
    return this.http.post<User>('/api/users', user);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>('/api/users/' + id);
  }

}
