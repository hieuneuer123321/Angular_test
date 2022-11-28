import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { User } from '../modules/user';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  // private currentUserSubject!: BehaviorSubject<User>;
  // public currentUser!: Observable<User>;
  redirectUrl!: string;
  httpOption = {
    headers: new HttpHeaders({ 'Content-Type': 'Application/json' }),
  };
  apiUrl = 'https://638089f1786e112fe1b2aa93.mockapi.io/User';

  constructor(private http: HttpClient) {}

  login2(username: string, password: string) {
    return this.http.get<User>(this.apiUrl).pipe(
      map((user) => {
        // store user details jwt token in localStorage
        localStorage.setItem('currentUser', JSON.stringify(user));
        return user;
      })
    );
  }
  isLoggedIn() {
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    return false;
  }

  getAuthorizationToken() {
    const currentUser = JSON.parse(
      localStorage.getItem('currentUser') || JSON.stringify({ name: 'user' })
    );
    return currentUser.token;
  }
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl).pipe();
  }
  addUser(user: User): Observable<User[]> {
    return this.http.post<User[]>(this.apiUrl, user).pipe();
  }
  login(userName: string, password: string): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl).pipe();
  }
}
