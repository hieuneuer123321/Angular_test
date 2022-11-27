import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../modules/user';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  httpOption = {
    headers: new HttpHeaders({ 'Content-Type': 'Application/json' }),
  };
  apiUrl = 'https://638089f1786e112fe1b2aa93.mockapi.io/User';

  constructor(private http: HttpClient) {}
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl).pipe();
  }
  addUser(user: User): Observable<User[]> {
    return this.http.post<User[]>(this.apiUrl, user).pipe();
  }
}
