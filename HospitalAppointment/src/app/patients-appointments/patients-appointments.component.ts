import { Component } from '@angular/core';
import { AppointmentService } from '../Services/appointmnet.Service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-patients-appointments',
  templateUrl: './patients-appointments.component.html',
  styleUrl: './patients-appointments.component.css'
})
export class PatientsAppointmentsComponent {
  appointments: any[] = [];

  constructor(private appointmentService: AppointmentService, private router: Router) { }

  ngOnInit(): void {
    this.getBookedAppointments();
  }

  getBookedAppointments(): void {
    this.appointmentService.getBookedAppointments().subscribe(
      data => {
        this.appointments = data;
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

  cancelAppointment(id: number): void {
    if(window.confirm('Are you sure you want to cancel this appointment?')) {
      this.appointmentService.deleteAppointments(id).subscribe(
        response => {
          if (response.message === 'Appointment deleted successfully.') {
            this.appointments = this.appointments.filter(a => a.appointmentId !== id);
            alert('Appointment cancelled successfully.');
          } else {
            alert( response.message);
          }
        },
      );
    }
  }
  
  
}
