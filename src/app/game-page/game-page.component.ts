import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// import { Game, games } from 'src/games';
import { GamesFilterService } from '../services/public/games-filter.service';
import { LoginAuthService } from '../services/login-and-auth/login-auth.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css'],
})
export class GamePageComponent implements OnInit {
  isAdminAuth: boolean | null = null;
  game: any;
  gameId!: string | null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gamesFilterService: GamesFilterService,
    private loginAuthService: LoginAuthService
  ) {
    this.loginAuthService.isAdminAuth$.subscribe((isAdMinAuth) => {
      this.isAdminAuth = isAdMinAuth;
    });
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const gameIdFromRoute = routeParams.get('id');
    this.gameId = gameIdFromRoute;
    this.gamesFilterService.getGame(this.gameId).subscribe((res) => {
      this.game = res.data.game;
    });

    // this.game = games.find((game) => game.id === gameIdFromRoute);
  }

  onClick(checkType: string) {
    this.gamesFilterService.storeGameId(this.gameId);
    this.gamesFilterService.storeGame(this.game);
    if (checkType != 'edit') {
      this.router.navigate(['/form/', checkType]);
    } else {
      this.router.navigate([`/games/${this.gameId}/edit`]);
    }
  }
}
