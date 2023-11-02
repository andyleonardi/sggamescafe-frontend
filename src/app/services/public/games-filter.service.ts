import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { gameEndpoints } from 'src/endpoints';

@Injectable({
  providedIn: 'root',
})
export class GamesFilterService {
  gamesType: string = '';
  gameId!: string | null;
  game: any;

  constructor(private http: HttpClient) {}

  getGames(): Observable<any> {
    return this.http.get(gameEndpoints.getAllGames());
  }

  getGame(id: string | null): Observable<any> {
    return this.http.get(gameEndpoints.getOneGame(id));
  }

  filterGames(type: string): void {
    this.gamesType = type;
  }

  getGameType() {
    return this.gamesType;
  }

  storeGameId(id: string | null) {
    this.gameId = id;
  }

  storeGame(game: any) {
    this.game = game;
  }

  getGameId() {
    return this.gameId;
  }

  getStoredGame() {
    return this.game;
  }

  getLastBorrower() {
    let checkouts: any[] = this.game.checkouts;
    console.log("here's list of checkouts ", checkouts);
    return checkouts.find(
      (c) => c.checkoutType === 'Borrow' && c.returnDate === null
    ).ldap;
    // console.log(lastCheckout);
    // return lastCheckout;
  }
}
