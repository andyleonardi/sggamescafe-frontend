import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { MatTableDataSource } from '@angular/material/table';

import { GamesFilterService } from '../services/public/games-filter.service';

@Component({
  selector: 'app-borrow-page',
  templateUrl: './borrow-page.component.html',
  styleUrls: ['./borrow-page.component.css'],
})
export class BorrowPageComponent implements OnInit {
  game: any;
  games: [] = [];
  users: string[] | undefined = [];
  recList: any[] | undefined = [];
  displayedColumns: string[] = ['thumbnail', 'game'];
  dataSource: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private gamesFilterService: GamesFilterService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const gameIdFromRoute = routeParams.get('id');

    this.gamesFilterService.getGame(gameIdFromRoute).subscribe((res) => {
      this.game = res.data.game;

      this.gamesFilterService.getGames().subscribe((res) => {
        this.games = res.data.games;

        this.users = this.game.checkouts.map((c: any) => c.ldap);
        console.log(this.users);

        // find users who borrowed this game [array of users]
        // for each user, find games they've borrowed / played previously
        // store them in an array
        // aggregate this array into [name, type, checkout_count]
        // display top 5 games

        const gamesList = this.users?.map((user) => {
          const filteredGames = this.games.filter(
            (game: any) =>
              game.checkouts.some((c: any) => c.ldap === user) &&
              game.status === 'Available'
          );
          return filteredGames;
        });
        const unique = new Set();
        gamesList?.flat().map((game) => {
          unique.add(game);
        });
        const uniqueGames: any[] = [...unique];
        console.log(uniqueGames);
        const recListFull = uniqueGames.map((obj) => {
          return {
            id: obj._id,
            name: obj.name,
            imgThumb: obj.bggImgThumb,
            count: obj.checkouts.length,
          };
        });
        this.recList = recListFull
          .sort((a, b) => b.count - a.count)
          .slice(0, 5);
        this.dataSource = this.recList;
      });
    });
  }
}
