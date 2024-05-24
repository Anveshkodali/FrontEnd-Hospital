import { Component , OnInit} from '@angular/core';
import { DoctorService } from '../services/Doctor.Service';
import { DoctorSchedules } from '../Model/Schedules.Model';
import { AppointmentService } from '../Services/appointmnet.Service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-availabilityofdoctorcalender',
  templateUrl: './availabilityofdoctorcalender.component.html',
  styleUrls: ['./availabilityofdoctorcalender.component.css']
})
export class AvailabilityofdoctorcalenderComponent implements OnInit {

  schedules: DoctorSchedules[] = [];
  private doctorName: string;

  constructor(private route: ActivatedRoute, private doctorService: DoctorService,private appointmentService:AppointmentService) {
    this.route.queryParams.subscribe(params => {
      this.doctorName = params['doctorName'];
    });
  }

  ngOnInit(): void {
    this.fetchEvents(this.doctorName);
  }

  fetchEvents(doctorName: string): void {
    this.appointmentService.getDoctorAvailability(doctorName)
      .subscribe(schedules =>  {
        this.schedules = this.transformData(schedules);
      });
  }
  transformData(data: any): any[] {
    return Object.keys(data).map(date => {
      const schedule = data[date];
      return {
        date: new Date(date),
        dayOfWeek: schedule.dayOfWeek,
        startTime: schedule.startTime === "Not Available" ? "Not Available" : new Date(`1970-01-01T${schedule.startTime}`).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        endTime: schedule.endTime === "Not Available" ? "Not Available" : new Date(`1970-01-01T${schedule.endTime}`).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        availability: schedule.startTime === "Not Available" ? "Not Available" : "Available"
      };
    });
  }
}
