import { Injectable } from '@angular/core';
import { Profile } from './profile';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  private readonly apiUrl = 'http://localhost:5223';
  constructor(private http:HttpClient) { }

  getUserProfile(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/UserProfile`);
  }
  getDoctorProfile():Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/DoctorProfile`);
  }
}
