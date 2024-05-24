import { Component } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';
import { DoctorService } from '../services/Doctor.Service';
import { UserAuthService } from '../Services/Auth.Service';
import { Speciality } from '../Model/Enums.Model';
import { ProfilesService } from '../profiles.service';
import { Profile } from '../profile';
@Component({
  selector: 'app-headerpostlogin',
  templateUrl: './headerpostlogin.component.html',
  styleUrl: './headerpostlogin.component.css'
})
export class HeaderpostloginComponent {
  constructor(private doctorService: DoctorService, private router: Router,private authService:UserAuthService,private profiles:ProfilesService) { }
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
