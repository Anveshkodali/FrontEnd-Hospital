import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Login } from '../../login/login.model';
import { DoctorAuthService } from '../../Services/DoctorAutheService.service';

@Component({
  selector: 'app-doctorlogin',
  templateUrl: './doctorlogin.component.html',
  styleUrls: ['./doctorlogin.component.css']
})
export class DoctorloginComponent {
  
  logindetails: Login = {
    username: '',
    password: ''
  };

  constructor(private http: HttpClient, private authService: DoctorAuthService, private router: Router, private cookie: CookieService) { }

  ngOnInit() { }

  login() {
    const url = 'http://Localhost:5223/Login'+`?username=${this.logindetails.username}`+`&password=${this.logindetails.password}`
    ; 

    this.http.post<any>(url, {})
      .subscribe(
        (response: any) => {
          if (response.result === "Please signup and Login") {
              window.alert('Please sign up and then login.');
          } else { 
              window.alert('Login success');
              this.authService.setToken(response.result, this.logindetails.username);
              this.cookie.set('cookieName', this.logindetails.username, { expires: 60, path: '/home' }); // Store the JWT token in local storage
               this.router.navigate(['doctor/doctor-postlogin']);// Redirect to home page
          }
        }
      );
  }
}
