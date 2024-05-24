import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserAuthService } from './Auth.Service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public auth: UserAuthService, public router: Router) {}

  canActivate(): boolean {
    if (!this.auth.getToken()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
