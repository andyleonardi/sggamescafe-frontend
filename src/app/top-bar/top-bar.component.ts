import { Component } from '@angular/core';

import { LoginAuthService } from '../services/login-and-auth/login-auth.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  isAdminAuth: boolean | null = null;

  constructor(private loginAuthService: LoginAuthService) {
    this.loginAuthService.isAdminAuth$.subscribe((isAdMinAuth) => {
      this.isAdminAuth = isAdMinAuth;
    });
  }
}
