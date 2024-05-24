import { Component } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { DoctorAuthGuardService } from '../../Services/DoctorAuthGuard.Service';
import { DoctorAuthService } from '../../Services/DoctorAutheService.service';
import { DoctorProfile } from '../../Model/doctor-profile';
import { ProfilesService } from '../../profiles.service';
@Component({
  selector: 'app-doctorhomepostlogin',
  templateUrl: './doctorhomepostlogin.component.html',
  styleUrl: './doctorhomepostlogin.component.css'
})
export class DoctorhomepostloginComponent {
  constructor(private router: Router,private AuthGuard:DoctorAuthGuardService,private auth:DoctorAuthService,private profiles:ProfilesService) { }
  doctorProfile: DoctorProfile={
    FullName: '',
    Email:'',
    ImagePath: '',
  };
  showDetails = true;
  toggleDetails() {
    this.showDetails = !this.showDetails; // Toggle the value of showDetails
  }
// doctorhomepostlogin.component.ts
// doctorhomepostlogin.component.ts
ngOnInit(): void {
  this.profiles.getDoctorProfile().subscribe(response => {
    this.doctorProfile = {
      FullName: response.doctorProfile.fullName,
     Email:response.doctorProfile.email,
      ImagePath: response.doctorProfile.imagePath
     
    };
    console.log(response.doctorProfile);
    console.log(this.doctorProfile);
  });
}




  

  logout(): void {
    this.auth.logout();
    }
}



