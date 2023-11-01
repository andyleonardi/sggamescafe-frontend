import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AdminToServerService } from '../services/admin/admin-to-server.service';

interface Type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-admin-add-game-form',
  templateUrl: './admin-add-game-form.component.html',
  styleUrls: ['./admin-add-game-form.component.css'],
})
export class AdminAddGameFormComponent {
  selectedStatus: string = 'Available';
  selectedType: string = 'Light';

  @Input() game: any;

  types: Type[] = [
    { value: 'Two Player', viewValue: '2-Player' },
    { value: 'Light', viewValue: 'Light' },
    { value: 'Next Step', viewValue: 'Next Step' },
    { value: 'Heavy', viewValue: 'Heavy' },
    { value: 'Abstract', viewValue: 'Abstract' },
    { value: 'Escape Games', viewValue: 'Escape Room Games' },
    { value: 'Co-op', viewValue: 'Co-op' },
    { value: 'Party', viewValue: 'Party' },
    { value: 'Small Games', viewValue: 'Small Games' },
  ];

  constructor(
    private _snackBar: MatSnackBar,
    private adminToServerService: AdminToServerService,
    private router: Router
  ) {}

  handleAdd() {
    const body = {
      name: this.game.name,
      bggthingId: this.game.bggThingId,
      status: this.selectedStatus,
      type: this.selectedType,
    };
    // console.log('button clicked, will submit the following game ', body);

    this.adminToServerService
      .addGame(body.name, body.bggthingId, body.status, body.type)
      .subscribe(
        (res) => {
          this._snackBar.open(res.message, 'X', {
            duration: 2000,
          });
          this.router.navigate(['/games/', res.data.game._id]);
        },
        (error) => {
          this._snackBar.open(error.error.message, '', {
            duration: 4000,
          });
        }
      );
  }
}
