import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { GamesFilterService } from '../services/public/games-filter.service';
import { AdminToServerService } from '../services/admin/admin-to-server.service';

interface Type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-admin-edit-games',
  templateUrl: './admin-edit-games.component.html',
  styleUrls: ['./admin-edit-games.component.css'],
})
export class AdminEditGamesComponent implements OnInit {
  selectedStatus: string = 'Available';
  selectedType: string = 'Light';
  game: any;
  gameId!: string | null;
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
    private gamesFilterService: GamesFilterService,
    private route: ActivatedRoute,
    private router: Router,
    private adminToServerService: AdminToServerService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const gameIdFromRoute = routeParams.get('id');
    this.gameId = gameIdFromRoute;

    this.gamesFilterService.getGame(this.gameId).subscribe((res) => {
      this.game = res.data.game;
      this.selectedStatus = res.data.game.status;
      this.selectedType = res.data.game.type;
    });
  }

  submitEdit() {
    console.log(
      'Changed game status to: ',
      this.selectedStatus,
      ' and game type to: ',
      this.selectedType
    );

    this.adminToServerService
      .editGame(this.selectedStatus, this.selectedType)
      .subscribe(
        (res) => {
          this._snackBar.open(res.message, 'X', {
            duration: 2000,
          });
          this.router.navigate(['/games/', this.gameId]);
        },
        (error) => {
          this._snackBar.open(error.error.message, '', {
            duration: 2000,
          });
        }
      );
  }

  deleteGame() {
    this.adminToServerService.deleteGame().subscribe(
      (res) => {
        this._snackBar.open(res.message, 'X', {
          duration: 2000,
        });
        this.router.navigate(['/admin/settings']);
      },
      (error) => {
        this._snackBar.open(error.error.message, '', {
          duration: 2000,
        });
      }
    );
  }
}

/*
type: {
      type: String,
      enum: [
        "Two Player",
        "Light",
        "Next Step",
        "Heavy",
        "Abstract",
        "Escape Games",
        "Co-op",
        "Party",
        "Small Games",
      ],
    }
status: {
      type: String,
      enum: ["Available", "Borrowed", "Removed"],
    }
*/
