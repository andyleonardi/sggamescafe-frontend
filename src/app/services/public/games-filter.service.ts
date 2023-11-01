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

  getGameId() {
    return this.gameId;
  }
}
