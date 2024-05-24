import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError,catchError } from 'rxjs';
import { DoctorService } from '../../services/Doctor.Service';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-doctor-appointments',
  templateUrl: './doctor-appointments.component.html',
  styleUrl: './doctor-appointments.component.css'
})
export class DoctorAppointmentsComponent {
  
  appointments: any[] = [];

  constructor(private http: HttpClient, private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.getDoctorAppointments();
  }

  private url = 'http://localhost:5223';

  getDoctorAppointments() {
    return this.http.get(`${this.url}/getDoctorAppointments`).subscribe(
      (data: any[]) => {
        this.appointments = data;
      }
    );
  }

  approveAppointment(id: number) {
    if(confirm("Are you sure you want to approve this appointment?")) {
      this.doctorService.approveAppointment(id).subscribe(
        (response: any) => {
          if (response && response.message) {
            alert(response.message);
          } else {
            alert('Appointment approved successfully.');
            this.appointments = this.appointments.filter(appointment => appointment.appointmentId !== id);
          }
        }
      );
    }
  }

  disapproveAppointment(id: number) {
    if(confirm("Are you sure you want to disapprove this appointment?")) {
      this.doctorService.disapproveAppointment(id).subscribe(
        (response: any) => {
          if (response && response.message) {
            alert(response.message);
          } else {
            alert('Appointment disapproved successfully.');
            this.appointments = this.appointments.filter(appointment => appointment.appointmentId !== id);
          }
        }
      );
    }
  }
}



