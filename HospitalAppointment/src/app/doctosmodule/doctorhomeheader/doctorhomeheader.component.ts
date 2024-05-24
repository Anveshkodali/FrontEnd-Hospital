import { Component } from '@angular/core';
import { DoctorProfile } from '../../Model/doctor-profile';
import { ProfilesService } from '../../profiles.service';
import { DoctorAuthService } from '../../Services/DoctorAutheService.service';
@Component({
  selector: 'app-doctorhomeheader',
  templateUrl: './doctorhomeheader.component.html',
  styleUrl: './doctorhomeheader.component.css'
})
export class DoctorhomeheaderComponent {
  
  doctorProfile: DoctorProfile={
    FullName: '',
    Email:'',
    ImagePath: '',
  };
  constructor(private auth:DoctorAuthService,private profiles:ProfilesService) { }
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
    showDetails = true;
    toggleDetails() {
      this.showDetails = !this.showDetails; // Toggle the value of showDetails
    }
}
