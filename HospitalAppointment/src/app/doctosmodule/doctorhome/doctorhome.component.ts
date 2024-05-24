import { Component } from '@angular/core';

@Component({
  selector: 'app-doctorhome',
  templateUrl: './doctorhome.component.html',
  styleUrl: './doctorhome.component.css'
})
export class DoctorhomeComponent {
  showLogin = true;
  showRegister = false;

  toggleVisibility(component: string) {
    if (component === 'login') {
      this.showLogin = true;
      this.showRegister = false;
    } else if (component === 'register') {
      this.showLogin = false;
      this.showRegister = true;
    }
  }
}
