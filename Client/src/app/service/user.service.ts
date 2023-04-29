import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GeneralUsuario, Usuario } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUsers() {
    throw new Error('Method not implemented.');
  }
  url = environment.URL;

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get<any>(`${this.url}/users`);
  }

  create(user: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.url}/users/nuevo`, user);
  }
}
