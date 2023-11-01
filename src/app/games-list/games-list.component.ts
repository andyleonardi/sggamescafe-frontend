import { Component } from '@angular/core';

// import { games } from 'src/games';
import { GamesFilterService } from '../services/public/games-filter.service';
import { LoginAuthService } from '../services/login-and-auth/login-auth.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css'],
})
export class GamesListComponent {
  isAdminAuth: boolean | null = null;
  gamesType!: string;

  constructor(
    private gamesFilterService: GamesFilterService,
    private loginAuthService: LoginAuthService,
  ) {
    this.loginAuthService.isAdminAuth$.subscribe((isAdMinAuth) => {
      this.isAdminAuth = isAdMinAuth;
    });
    this.gamesType = this.gamesFilterService.getGameType();
  }

}
