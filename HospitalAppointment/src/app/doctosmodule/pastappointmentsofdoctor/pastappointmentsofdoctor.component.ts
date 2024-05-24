import { Component } from '@angular/core';
import { AppointmentService } from '../../Services/appointmnet.Service';
@Component({
  selector: 'app-pastappointmentsofdoctor',
  templateUrl: './pastappointmentsofdoctor.component.html',
  styleUrl: './pastappointmentsofdoctor.component.css'
})
export class PastappointmentsofdoctorComponent {
  appointments = [];

  constructor(private appointmentService: AppointmentService) { }
  ngOnInit() {
    this.appointmentService.getDoctorsAppointmentsForPast().subscribe(
      data => this.appointments = data.message
    );
  }
}
