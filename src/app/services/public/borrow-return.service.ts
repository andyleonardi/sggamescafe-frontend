import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { gameEndpoints } from 'src/endpoints';
import { GamesFilterService } from './games-filter.service';

@Injectable({
  providedIn: 'root',
})
export class BorrowReturnService {
  gameId!: string | null;

  constructor(
    private http: HttpClient,
    private gamesFilterService: GamesFilterService
  ) {}

  addCheckout(
    status: string,
    ldap: string,
    type: string,
    checkDate: Date,
    returnDate: Date | null
  ): Observable<any> {
    const body = {
      status: status,
      checkout: {
        ldap: ldap,
        checkoutType: type,
        checkDate: checkDate,
        returnDate: returnDate,
      },
    };
    this.gameId = this.gamesFilterService.getGameId();

    return this.http.put(gameEndpoints.addCheckout(this.gameId), body);
  }

  returnGame(
    status: string,
    ldap: string,
    returnDate: Date,
    recommended: boolean | null
  ): Observable<any> {
    const body = {
      status: status,
      ldap: ldap,
      returnDate: returnDate,
      recommended: recommended,
    };
    this.gameId = this.gamesFilterService.getGameId();

    return this.http.put(gameEndpoints.addReturn(this.gameId), body);
  }
}
