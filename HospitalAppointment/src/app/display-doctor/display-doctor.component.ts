import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Speciality } from '../Model/Enums.Model';
import { DoctorService } from '../services/Doctor.Service';
import { AppointmentService } from '../Services/appointmnet.Service';
 import { DoctorDetailsDisplayDto } from '../Model/DoctorDetailsDisplay.Model';
 import { DoctorSchedules } from '../Model/Schedules.Model';
 

@Component({
  selector: 'app-display-doctor',
  templateUrl: './display-doctor.component.html',
  styleUrl: './display-doctor.component.css'
}) 


export class DisplayDoctorComponent {
  doctors = [];
  loading = true;
  department:Speciality;
  departments = Object.keys(Speciality).filter(key => isNaN(Number(key)));
  constructor(private appointmentService:AppointmentService,private route:ActivatedRoute,private router:Router,private doctorService:DoctorService) { }

  
  

    ngOnInit() {
      this.route.queryParams.subscribe(params => {
        this.department = params['param1'];
        this.fetchDoctors();
      });
    }
  
    fetchDoctors() {
      this.loading = true;
      this.doctorService.getDoctorsBasedOnCategory(this.department).subscribe((doctors: DoctorDetailsDisplayDto[]) => {
        this.doctors = doctors;
        this.loading = false;
      });
    }
    goToAvailability(doctorName:string): void {
      if (doctorName) {
        this.router.navigate(['/doctor-availability'], { queryParams: { doctorName: doctorName} });
      } else {
        console.error('Doctor name is undefined');
      }
    }
    
    
    book(doctor: DoctorDetailsDisplayDto) {
      this.router.navigate(['/appointment'], { 
        queryParams: { 
          doctorName: doctor.firstName + ' ' +doctor.lastName,
          department: doctor.specialityname 
        } 
      });
    }
   
  }


