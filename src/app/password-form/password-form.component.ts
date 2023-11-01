import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AdminToServerService } from '../services/admin/admin-to-server.service';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css'],
})
export class PasswordFormComponent implements OnInit {
  chgPwdSuccess: boolean | null = true;
  chgPwdMsg: string | null = null;

  form: FormGroup = new FormGroup({
    oldPassword: new FormControl(''),
    newPassword: new FormControl(''),
  });

  constructor(
    private adminToServerService: AdminToServerService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.adminToServerService.chgPwdSuccess$.subscribe((chgPwdSuccess) => {
      this.chgPwdSuccess = chgPwdSuccess;
    });

    this.adminToServerService.chgPwdMsg$.subscribe((chgPwdMsg) => {
      this.chgPwdMsg = chgPwdMsg;
    });
  }

  submit() {
    if (this.form.valid) {
      console.log('Submitted ', this.form.value);

      const oldPassword = this.form.value.oldPassword;
      const newPassword = this.form.value.newPassword;

      this.adminToServerService.editPassword(oldPassword, newPassword);
    }

    if (this.chgPwdSuccess) {
      this._snackBar.open('Successfully changed password', 'X', {
        duration: 2000,
      });
    }
  }
}
