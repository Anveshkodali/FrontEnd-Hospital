import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DoctorDisplayDtoLogin } from '../../Model/DoctorDisplayForLogin.Model';
import { Speciality } from '../../Model/Enums.Model';

@Component({
  selector: 'app-doctorregister',
  templateUrl: './doctorregister.component.html',
  styleUrl: './doctorregister.component.css'
})
export class DoctorregisterComponent implements OnInit{
 
  doctor: DoctorDisplayDtoLogin = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    qualification: '',
    age: null,
    genderName: null,
    specialityname: null,
    consultationFee: null,
    experience: null,
    description: '',
    imagefile: null 
  };
  selectedFile: File | null = null;
  specialities = Object.values(Speciality);
 
  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
 ngOnInit(): void {
  
 }
  registerDoctor() {
    const formData = new FormData();
  
    const url = `http://localhost:5223/Register` +
      `?FirstName=${this.doctor.firstName}` +
      `&LastName=${this.doctor.lastName}` +
      `&email=${this.doctor.email}` +
      `&age=${this.doctor.age}` +
      `&password=${this.doctor.password}`
      +
      `&qualification=${encodeURIComponent(this.doctor.qualification)}` +
      `&gender=${this.doctor.genderName}` +
      `&specialityname=${this.doctor.specialityname}` +
      `&consultationFee=${this.doctor.consultationFee}` +
      `&experience=${this.doctor.experience}` +
      `&description=${encodeURIComponent(this.doctor.description)}`;
  
    if(this.selectedFile) {
      formData.append('imagefile', this.selectedFile, this.selectedFile.name);
    }
    if (!this.selectedFile) {
      window.alert('Please select an image file before registering.');
      return;
    }
    this.http.post(url, formData, {responseType:'text'}).subscribe(response => {
      const registrationMessage = response;
      window.alert(registrationMessage);
    }
    );
  }
  
}
