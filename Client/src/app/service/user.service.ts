import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {  Usuario, Respuesta } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUsers() {
    throw new Error('Method not implemented.');
  }
  url = `http://127.0.0.1:3000`;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Usuario[]>(`${this.url}/users`);
  }

  create(user: Usuario){
    return this.http.post<Respuesta>(`${this.url}/users/nuevo`, user);
  }
}
