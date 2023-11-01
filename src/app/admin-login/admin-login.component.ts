import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { LoginAuthService } from '../services/login-and-auth/login-auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  errorCheck: boolean | null = false;
  errorMessage: string | null = null;
  isAdminAuth: boolean | null = null;

  form: FormGroup = new FormGroup({
    ldap: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private loginAuthService: LoginAuthService) {
    this.loginAuthService.isAdminAuth$.subscribe((isAdMinAuth) => {
      this.isAdminAuth = isAdMinAuth;
    });
  }

  ngOnInit() {
    this.loginAuthService.errorCheck$.subscribe((errorCheck) => {
      this.errorCheck = errorCheck;
    });

    this.loginAuthService.errorMessage$.subscribe((errorMessage) => {
      this.errorMessage = errorMessage;
    });
  }

  

  submit() {
    if (this.form.valid) {
      // console.log('Submitted ', this.form.value);

      const ldap = this.form.value.ldap;
      const password = this.form.value.password;

      this.loginAuthService.adminLogin(ldap, password);
    }
  }

  logout() {
    this.loginAuthService.adminLogout();
  }
}
