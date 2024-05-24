import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Register } from './register.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  formData: FormData = new FormData();
  selectedFile: File | null = null;
  register: Register = {
    FirstName: '',
    LastName: '',
    Email: '',
    Age: null,
    Address: '',
    PhoneNumber: null,
    GenderName: '',
    Username: '',
    Password: ''
  };
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0]; // 
  }
  constructor(private router: Router, private http: HttpClient) {}

  onsubmit(register: Register) {
    const formData = new FormData();
    
    
    const url = `http://localhost:5223/api/controller/Register` +
      `?FirstName=${register.FirstName}` +
      `&LastName=${register.LastName}` +
      `&email=${register.Email}` +
      `&age=${register.Age}` +
      `&address=${encodeURIComponent(register.Address)}` +
      `&phoneNumber=${register.PhoneNumber}` +
      `&gender=${register.GenderName}` +
      `&username=${register.Username}` +
      `&password=${register.Password}`;
   
  
    if(this.selectedFile) {
      formData.append('imagefile',this.selectedFile,this.selectedFile.name); 
    }// Append the selected file

    this.http.post(url,formData,{responseType:'text'}).subscribe(response => {
      const registrationMessage = response;
      if (registrationMessage === 'Registration successful') {
        window.alert('Successfully registered');
        this.register = {
          FirstName: '',
          LastName: '',
          Email: '',
          Age: null,
          Address: '',
          PhoneNumber: null,
          GenderName: '',
          Username: '',
          Password: ''
      };
       
      } else {
        window.alert(registrationMessage);
      }
    });

}
}
