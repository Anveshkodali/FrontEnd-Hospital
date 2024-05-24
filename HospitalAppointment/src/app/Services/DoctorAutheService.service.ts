import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DoctorAuthService {
  private readonly TOKEN_KEY = 'doctorAuthToken';
  private readonly EXPIRATION_TIME = 15 * 60 * 1000; // 4 minutes in milliseconds
  isLogin = false;

  constructor(private router: Router) {
    setInterval(() => this.checkTokenExpiration(), 60 * 1000); // Check every minute
    this.checkTokenExpiration(); // Check token expiration on service initialization
    window.addEventListener('storage', () => this.checkTokenExpiration()); // Add this line
  }
  getToken(): string {
    const tokenData = JSON.parse(sessionStorage.getItem(this.TOKEN_KEY));
    return tokenData ? tokenData.token : null;
  }
  
  setToken(token: string, username: string) {
    this.isLogin = true;
    const expirationDate = new Date().getTime() + this.EXPIRATION_TIME;
    sessionStorage.setItem(this.TOKEN_KEY, JSON.stringify({ token, username, expirationDate }));
  }

  checkTokenExpiration(): void {
    const tokenData = JSON.parse(sessionStorage.getItem(this.TOKEN_KEY));
    if (tokenData && new Date().getTime() > tokenData.expirationDate) {
      alert('Session expired');
      this.logout(); // Call logout method on session expiration
    }
  }

  removeToken(): void {
    sessionStorage.removeItem(this.TOKEN_KEY);
    this.isLogin = false; // Update login state when token is removed
  }

  logout(): void { 
    this.removeToken();
    this.router.navigate(['doctor/doctorhome']); // Redirect to login after logout
  }
}
