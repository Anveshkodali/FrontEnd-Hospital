import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';
import { Speciality } from '../Model/Enums.Model';
import { DoctorService } from '../services/Doctor.Service';
import { UserAuthService } from '../Services/Auth.Service';
import { Profile } from '../profile';
import { ProfilesService } from '../profiles.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  doctors: any[] = [];
 department:Speciality;
 departments = Object.keys(Speciality).filter(key => isNaN(Number(key)));
 profile: Profile = {
  email: '',
  name: '',
  username: '',
  imagefile: ''
};

ngOnInit(): void {
  this.profiles.getUserProfile().subscribe(response => {
    this.profile.email = response.result.email;
    this.profile.name = response.result.name;
    this.profile.username = response.result.username;
    this.profile.imagefile = response.result.imagefile;
    console.log(this.profile);
  });
}



  constructor(private doctorService: DoctorService, private router: Router,private authService:UserAuthService,private profiles:ProfilesService) { }



  bookAppointment(doctor: any): void {
    this.router.navigate(['/appointment', doctor.id]);
  } 
  goToDisplayDoctor(department) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "param1": department
      }
    };
    this.router.navigate(['/display-doctor'], navigationExtras);
  }

  bookCheckUp(): void {
    this.router.navigate(['/book-checkup']);
  }

  bookFollowUp(): void {
    this.router.navigate(['/book-FollowUp']);
  }

  logout(): void {
    this.authService.logout();
  }
  goToAppointment(): void {
    this.router.navigate(['/appointment']);
  }

   // Replace 'any' with your actual Doctor model

  selectDoctor(doctor: any): void { // Replace 'any' with your actual Doctor model
    this.router.navigate(['/appointment', doctor.id]);
  }
  goToMyBookings(): void { // Add this method
    this.router.navigate(['/patient-appointments']);
  }

}
