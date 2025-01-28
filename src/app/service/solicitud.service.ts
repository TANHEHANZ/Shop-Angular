import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SolicitudService {
  user: any[];
  API_URL = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {
    this.user = [];
  }
  getData(): Observable<any> {
    return this.http.get<any>('localhost');
  }

  getUser(): Observable<any> {
    return this.http.get<any[]>(this.API_URL);
  }
}
