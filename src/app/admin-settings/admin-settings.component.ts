import { Component } from '@angular/core';

import { LoginAuthService } from '../services/login-and-auth/login-auth.service';

@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.component.html',
  styleUrls: ['./admin-settings.component.css'],
})
export class AdminSettingsComponent {
  
  constructor(
    private loginAuthService: LoginAuthService,
  ) {}

  logout() {
    this.loginAuthService.adminLogout();
  }
}
