import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private readonly TOKEN_KEY = 'userAuthToken';
  private readonly USERNAME_KEY = 'username';
  private readonly EXPIRATION_TIME = 15 * 60 * 1000; // 2 minutes in milliseconds
  isLogin=false;

  constructor(private router: Router) { 
    setInterval(() => this.checkTokenExpiration(), 60 * 1000); // Check every minute
  }

  getToken(): string {
    const tokenData = JSON.parse(sessionStorage.getItem(this.TOKEN_KEY));
    return tokenData ? tokenData.token : null;
  }
  
  setToken(token: string, username: string) {
    this.isLogin=true;
    const expirationDate = new Date().getTime() + this.EXPIRATION_TIME;
    sessionStorage.setItem(this.TOKEN_KEY, JSON.stringify({ token, username, expirationDate }));
  }

  checkTokenExpiration(): void {
    const tokenData = JSON.parse(sessionStorage.getItem(this.TOKEN_KEY));
    if (tokenData && new Date().getTime() > tokenData.expirationDate) {
      alert('Session expired');
      this.sessionlogout();
    }
  }

  removeToken(): void {
    sessionStorage.removeItem(this.TOKEN_KEY);
  }

  logout(): void { 
    if (window.confirm('Are you sure you want to logout?')) {
      this.removeToken();
      this.isLogin=false;
      this.router.navigate(['/login']);
    }
  }
  
  sessionlogout(){
    this.removeToken();
    this.router.navigate(['/login']);
  }
}
