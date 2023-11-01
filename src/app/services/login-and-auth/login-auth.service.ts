import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';

import { userEndpoints } from 'src/endpoints';

@Injectable({
  providedIn: 'root',
})
export class LoginAuthService {
  // adminUser: {
  //   user: { ldap: string };
  //   isAdminAuth: boolean;
  // } = {
  //   user: { ldap: '' },
  //   isAdminAuth: false,
  // };

  private isAdminValue = new BehaviorSubject<boolean | null>(false);
  isAdminAuth$: Observable<boolean | null> = this.isAdminValue.asObservable();
  private userldap = new BehaviorSubject<string | null>(null);
  ldap$: Observable<string | null> = this.userldap.asObservable();

  private errorResponse = new BehaviorSubject<boolean | false>(false);
  errorCheck$: Observable<boolean | false> = this.errorResponse.asObservable();
  private errorMessageValue = new BehaviorSubject<string | null>(null);
  errorMessage$: Observable<string | null> =
    this.errorMessageValue.asObservable();

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router
  ) {}

  setUser(ldap: string | null, isAdMinAuth: boolean | null) {
    this.userldap.next(ldap);
    this.isAdminValue.next(isAdMinAuth);
  }

  checkResponseStatus(errorCheck: boolean | false) {
    this.errorResponse.next(errorCheck);
  }

  setErrorMessage(errorMessage: string | null) {
    this.errorMessageValue.next(errorMessage);
  }

  adminLogin(ldap: string, password: string) {
    const body = {
      ldap: ldap,
      password: password,
    };

    return this.http.post(userEndpoints.login(), body).subscribe(
      (res: any) => {
        const token = res.data.token;
        const user = res.data.user;

        // Store token in cookie
        this.cookieService.set('authToken', token);

        // Update adminUser
        this.setUser(user.ldap, true);
        // this.adminUser.user = user;
        // this.adminUser.isAdminAuth = true;

        this.router.navigate(['/admin/settings']);
      },
      (error) => {
        // console.error(`Error: ${error.error.message}`);
        this.checkResponseStatus(!error.error.success);
        this.setErrorMessage(error.error.message);
        throw error;
        // this.responseCheck = {
        //   success: error.error.success,
        //   message: error.error.message,
        // };
        // console.log(this.responseCheck);
      }
    );
  }

  getToken(): string | null {
    return this.cookieService.get('authToken');
  }

  checkAdminAuth() {
    let checkValue: boolean | null = false;
    this.isAdminAuth$.subscribe((isAdminAuth) => {
      checkValue = isAdminAuth;
    });
    return checkValue;
  }

  adminLogout() {
    // Remove token from cookie
    this.cookieService.delete('authToken');
    this.setUser('', false);
    // this.adminUser.isAdminAuth = false;
    // this.adminUser.user = { ldap: '' };

    this.router.navigate(['/admin/login']);
  }
}
