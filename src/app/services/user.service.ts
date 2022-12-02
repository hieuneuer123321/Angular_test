import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { User } from '../modules/user';
import { apiUrl } from '../modules/aip_url';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  // private currentUserSubject!: BehaviorSubject<User>;
  // public currentUser!: Observable<User>;
  httpOption = {
    headers: new HttpHeaders({ 'Content-Type': 'Application/json' }),
  };
  apiUrl = apiUrl;
  messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) {}

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl).pipe();
  }
  addUser(user: User): Observable<User[]> {
    return this.http.post<User[]>(this.apiUrl, user).pipe();
  }
  updateUser(userId: any, user: User): Observable<User[]> {
    console.log(user);
    return this.http.put<User[]>(`${this.apiUrl}/${userId}`, user).pipe();
  }
  getUsers(userId: any): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${userId}`).pipe();
  }
  deleteUser(userId: any): Observable<User> {
    return this.http.delete<User>(`${this.apiUrl}/${userId}`).pipe();
  }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}
