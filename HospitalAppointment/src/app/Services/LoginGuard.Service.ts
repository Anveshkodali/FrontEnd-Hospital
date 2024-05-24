import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserAuthService } from './Auth.Service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
    
  constructor(private authService: UserAuthService, private router: Router) { }

  canActivate(): boolean {
    if (this.authService.getToken()) {
      this.router.navigate(['/home']);  // Redirect to home if already logged in
      return false;
    } else {
      return true;
    }
  }

  
}
