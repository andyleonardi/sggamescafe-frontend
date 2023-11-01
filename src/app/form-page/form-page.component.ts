import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

// import { Game, games } from 'src/games';
import { GamesFilterService } from '../services/public/games-filter.service';
import { BorrowReturnService } from '../services/public/borrow-return.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css'],
})
export class FormPageComponent implements OnInit {
  formType: string | null = '';
  gameId = this.gamesFilterService.getGameId();

  formInputs = this.formBuilder.group(
    {
      ldap: '',
      borrowAck: false,
      damageAck: false,
      returnAck: false,
      checkoutType: '',
      checkDate: new Date(),
      recommended: null,
    },
    Validators.required
  );

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private gamesFilterService: GamesFilterService,
    private borrowReturnService: BorrowReturnService,
    private _snackBar: MatSnackBar
  ) {}

  onSubmit(): void {
    this.formInputs.value.checkoutType = this.formType;

    if (this.formInputs.valid) {
      console.log(this.formInputs.value);
      console.log(this.gameId);
      // TODO: on submit, fetch PUT endpoints to push form inputs to checkouts in the database
      if (this.formType === 'play') {
        this.borrowReturnService
          .addCheckout(
            'Available',
            this.formInputs.value.ldap,
            'Play',
            this.formInputs.value.checkDate,
            this.formInputs.value.checkDate
          )
          .subscribe(
            (res) => {
              this._snackBar.open('Game checked out successfully', 'X', {
                duration: 2000,
              });
              this.router.navigate(['/']);
            },
            (error) => {
              this._snackBar.open(error.error.message, '', {
                duration: 2000,
              });
            }
          );
      } else if (this.formType === 'borrow') {
        this.borrowReturnService
          .addCheckout(
            'Borrowed',
            this.formInputs.value.ldap,
            'Borrow',
            this.formInputs.value.checkDate,
            null
          )
          .subscribe(
            (res) => {
              this._snackBar.open('Game checked out successfully', 'X', {
                duration: 2000,
              });
              this.router.navigate(['/borrowed/', this.gameId]);
            },
            (error) => {
              this._snackBar.open(error.error.message, '', {
                duration: 2000,
              });
            }
          );
      } else {
        this.borrowReturnService
          .returnGame(
            'Available',
            this.formInputs.value.ldap,
            this.formInputs.value.checkDate,
            this.formInputs.value.recommended
          )
          .subscribe(
            (res) => {
              this._snackBar.open(res.message, 'X', {
                duration: 2000,
              });
              this.router.navigate(['/returned/', this.gameId]);
            },
            (error) => {
              this._snackBar.open(error.error.message, '', {
                duration: 2000,
              });
            }
          );
      }
    } else {
      alert('Please input all required fields');
    }
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const formTypeFromRoute = routeParams.get('formType');

    this.formType = formTypeFromRoute;
  }
}
