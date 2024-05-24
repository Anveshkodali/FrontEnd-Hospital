import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../services/Doctor.Service';
import { AppointmentDtoforbooking} from '../Model/Appointmentbooking.Model'
import { AppointmentService } from '../Services/appointmnet.Service';
import { Speciality } from '../Model/Enums.Model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  message:string="";
  appointment: any = {
    appointmentType: '',
    selectDepartment: '',
    doctorName: '',
    appointmentDate: '',
    appointmentStartTime: '',
    appointmentEndTime: '',
    disease: '',
    description: ''
};

today = new Date().toISOString().split('T')[0];
  department: string;
  doctorslist: any[] = [];
  specialities = Object.keys(Speciality).filter(key => isNaN(Number(key)));
 
  constructor(private doctorService: DoctorService,private route:ActivatedRoute,private appoitmentService:AppointmentService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params); 
      this.doctorslist = [params['doctorName']];
      this.appointment.selectDepartment = params['department'];
    });
  }

  getDoctors(department: string): void {
    this.doctorService.getDoctorsBasedOnCategorynames(department).subscribe(doctors => {
      this.doctorslist = doctors;
    });
  }
  // bookAppointment() {
  //   if (this.appointment.appointmentType && this.appointment.selectDepartment && this.appointment.doctorName && this.appointment.appointmentDate && this.appointment.appointmentStartTime && this.appointment.appointmentEndTime && this.appointment.disease && this.appointment.description) {
  //       this.appoitmentService.bookAppointment(this.appointment).subscribe(
  //           response => {
  //               console.log(response);
  //               if(response.message == "Successfully Booked An appointment") {
  //                   alert('Success: ' + response.message);
  //               } else if(response.message == "The doctor is not available at the selected time. Please choose a different time slot." ||
  //                         response.message == "The selected time slot is already booked. Please choose a different time slot." ||
  //                         response.message == "Doctor not available today" ||
  //                         response.message == "Invalid appointment type") {
  //                   alert('Error: ' + response.message);
  //               }
  //           },
  //           error => {
  //               console.log(error);
  //               alert('Error: An error occurred while booking the appointment. Please try again later.');
  //           }
  //       );
  //   } else {
  //       alert('Warning: Please fill all the fields');
  //   }
  bookAppointment(): void {
    if (this.appointment.appointmentType && this.appointment.selectDepartment && this.appointment.doctorName && this.appointment.appointmentDate && this.appointment.appointmentStartTime && this.appointment.appointmentEndTime && this.appointment.disease && this.appointment.description) {
        this.appoitmentService.bookAppointment(this.appointment).subscribe(
            response => {
                console.log(response);
                this.message = response.message;
                if(response.message == "Successfully Booked An appointment") {
                    alert('Success: ' + this.message);
                } else if(response.message == "The doctor is not available at the selected time. Please choose a different time slot." ||
                          response.message == "The selected time slot is already booked. Please choose a different time slot." ||
                          response.message == "Doctor not available today" ||
                          response.message == "Invalid appointment type") {
                    alert('Error: ' + this.message);
                }
            },
            error => {
                console.log(error);
                this.message = error.error.message;
                alert( this.message);
            }
        );
    } else {
        this.message = 'Please fill all the fields';
        alert('Warning: ' + this.message);
    }
}

}



