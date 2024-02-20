// location.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private apiUrl = 'http://localhost:3000'; // Update with your server URL

  constructor(private http: HttpClient) {}

  sendLocation(latitude: number, longitude: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/location`, { latitude, longitude });
  }
}
