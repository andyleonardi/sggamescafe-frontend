import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { LoginAuthService } from './login-auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthChecker implements CanActivate {
  constructor(
    private loginAuthService: LoginAuthService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.loginAuthService.checkAdminAuth()) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
