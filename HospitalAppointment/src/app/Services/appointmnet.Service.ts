import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppointmentDtoforbooking } from '../Model/Appointmentbooking.Model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apiUrl = 'http://localhost:5223'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  bookAppointment(appointmentDto: any): Observable<any> {
    const url = `${this.apiUrl}/BookAppointment?appointmentType=${appointmentDto.appointmentType}&selectDepartment=${appointmentDto.selectDepartment}&doctorName=${appointmentDto.doctorName}&appointmentDate=${appointmentDto.appointmentDate}&appointmentStartTime=${appointmentDto.appointmentStartTime}&appointmentEndTime=${appointmentDto.appointmentEndTime}&disease=${appointmentDto.disease}&description=${appointmentDto.description}`;

  
  
  
    return this.http.post<any>(url,{});
  }

  getDoctorsAppointmentsForPast(): Observable<any> {
    return this.http.get('http://localhost:5223/past-appointments');
  }


  
  
  getBookedAppointments(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/GetAppointmentsofPatient`,{});
  }
  
  deleteAppointments(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/DeleteAppointments?id=${id}`);
  }
  getDoctorAvailability(doctorName: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Availabilty?doctorName=${doctorName}`,{});
  }
}
