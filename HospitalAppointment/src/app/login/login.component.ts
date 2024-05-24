import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Login } from './login.model';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { CookieService } from 'ngx-cookie-service';
import { UserAuthService } from '../Services/Auth.Service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logindetails: Login = {
    username: '',
    password: ''
  };

  constructor(private http: HttpClient, private router: Router,private cookie:CookieService,private authServicelogin:UserAuthService) { }

  ngOnInit() { }

  login() {
    const url = `http://localhost:5223/api/controller/Login`+
      `?username=${this.logindetails.username}`+
      `&password=${this.logindetails.password}`;
  
  
      this.http.post(url, {}, { responseType: 'json' })
      .subscribe(
        (response: any) => {
          if (response.result === "Please signUp and Login") {
              window.alert('Please sign up and then login.');
              this.router.navigate(['/login']);
          } else { 
            
              this.authServicelogin.setToken(response.result,this.logindetails.username);
       // Store the JWT token in local storage
              this.router.navigate(['/home']); // Redirect to home page
          }
      }
      
      );
  }
  
}
