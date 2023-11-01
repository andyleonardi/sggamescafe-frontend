import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { BehaviorSubject } from 'rxjs';

import { GamesFilterService } from '../services/public/games-filter.service';

@Component({
  selector: 'app-return-page',
  templateUrl: './return-page.component.html',
  styleUrls: ['./return-page.component.css'],
})
export class ReturnPageComponent implements OnInit {
  gameType!: string;

  constructor(
    private route: ActivatedRoute,
    private gamesFilterService: GamesFilterService
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const gameIdFromRoute = routeParams.get('id');

    this.gamesFilterService.getGame(gameIdFromRoute).subscribe((res) => {
      this.gameType = res.data.game.type;
    });
  }
}

/*
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
  */
