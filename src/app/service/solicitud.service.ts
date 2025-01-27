import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SolicitudService {
  constructor(private http: HttpClient) {}
  getData(): Observable<any> {
    return this.http.get<any>('localhost');
  }
}
