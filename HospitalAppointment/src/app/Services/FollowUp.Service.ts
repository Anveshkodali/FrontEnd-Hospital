import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FollowUp } from '../Model/FollowUpforbooking.Model';
@Injectable({
  providedIn: 'root'
})
export class FollowUpAndCheckUpService {

  private apiUrl = 'http://localhost:5223'; // replace with your API endpoint

  constructor(private http: HttpClient) { }

  bookFollowUp(followUpData: FollowUp): Observable<any> {
    const url = `${this.apiUrl}/BookFollowUp` +
      `?appointmentType=${followUpData.appointmentType}` +
      `&doctorName=${followUpData.doctorName}` +
      `&appointmentDate=${followUpData.appointmentDate}` +
      `&previousAppointmentDate=${followUpData.previousAppointmentDate}` +
      `&appointmentStartTime=${followUpData.appointmentStartTime}` +
      `&appointmentEndTime=${followUpData.appointmentEndTime}` +
      `&disease=${followUpData.disease}` +
      `&description=${followUpData.description}`;
  
    return this.http.post<any>(url, {});
  }
  
  
  bookCheckUp(checkUp: any): Observable<any> {
    const url = `${this.apiUrl}/BookCheckUp` +
      `?checkUpName=${encodeURIComponent(checkUp.checkUpName)}` +
      `&description=${encodeURIComponent(checkUp.description)}` +
      `&checkUpDate=${encodeURIComponent(checkUp.checkUpDate)}`;
  
    return this.http.post<any>(url, {});
  }
  
}
