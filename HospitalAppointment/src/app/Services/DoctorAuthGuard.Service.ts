import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DoctorAuthService } from './DoctorAutheService.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorAuthGuardService implements CanActivate {

  constructor(public auth: DoctorAuthService, public router: Router) {}

  canActivate(): boolean {
    if (!this.auth.getToken()) {
      this.router.navigate(['doctorhome']); // Redirect to login if not authenticated
      return false;
    }
    return true; // Allow navigation if authenticated
  }
}
