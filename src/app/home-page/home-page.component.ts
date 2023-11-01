import { Component } from '@angular/core';

import { GamesFilterService } from '../services/public/games-filter.service';

interface Type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
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
    private gamesFilterService: GamesFilterService
  ) {

  }

  filterGames(type: string) {
    this.gamesFilterService.filterGames(type);
  }
}


