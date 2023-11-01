import { Injectable } from '@angular/core';

import { games } from 'src/games';

@Injectable({
  providedIn: 'root',
})
export class StatsCalculatorService {
  games = [...games];

  constructor() {}

  countCurrentlyBorrowed() {
    const borrowedGames = this.games.filter(
      (game) => game.status === 'Borrowed'
    );
    const borrowCount: number = borrowedGames.length;
    return borrowCount;
  }

  countTotalCheckouts() {
    const newArr = this.games.map((game) => {
      return {
        id: game.id,
        checkCount: game.checkouts.length,
      };
    });
    const sumCheckCount = newArr.reduce(
      (accumulator, currentValue) => accumulator + currentValue.checkCount,
      0
    );
    return sumCheckCount;
  }

  countUniqueUsers() {
    const uniqueUsers = new Set();
    this.games.forEach((game) => {
      game.checkouts.forEach((c) => {
        uniqueUsers.add(c.ldap);
      });
    });

    const uniqueUsersArray = Array.from(uniqueUsers);
    return uniqueUsersArray.length;
  }
}
