import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { userEndpoints } from 'src/endpoints';
import { gameEndpoints } from 'src/endpoints';
import { bggEndpoints } from 'src/endpoints';
import { LoginAuthService } from '../login-and-auth/login-auth.service';
import { GamesFilterService } from '../public/games-filter.service';

@Injectable({
  providedIn: 'root',
})
export class AdminToServerService {
  ldap: string | null = null;
  gameId!: string | null;

  searchQuery!: string | null;

  private chgPwdResponse = new BehaviorSubject<boolean | null>(true);
  chgPwdSuccess$: Observable<boolean | null> =
    this.chgPwdResponse.asObservable();
  private chgPwdMessage = new BehaviorSubject<string | null>(null);
  chgPwdMsg$: Observable<string | null> = this.chgPwdMessage.asObservable();

  constructor(
    private http: HttpClient,
    private loginAuthService: LoginAuthService,
    private gamesFilterService: GamesFilterService
  ) {
    this.loginAuthService.ldap$.subscribe((ldap) => {
      this.ldap = ldap;
    });
  }

  checkResponseStatus(chgPwdSuccess: boolean | false) {
    this.chgPwdResponse.next(chgPwdSuccess);
  }

  setMessage(chgPwdMsg: string | null) {
    this.chgPwdMessage.next(chgPwdMsg);
  }

  editPassword(oldPassword: string, newPassword: string) {
    const body = {
      currentPassword: oldPassword,
      newPassword: newPassword,
    };
    const token = this.loginAuthService.getToken();

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http
      .put(userEndpoints.editPwd(this.ldap), body, { headers })
      .subscribe(
        (res: any) => {
          this.checkResponseStatus(res.success);
          this.setMessage(res.message);
          return res;
        },
        (error) => {
          this.checkResponseStatus(error.error.success);
          this.setMessage(error.error.message);
          throw error;
        }
      );
  }

  storeQuery(text: string) {
    this.searchQuery = text.replace(/ /g, '+');
  }

  searchBGG(): Observable<any> {
    return this.http.get(bggEndpoints.searchForGame(this.searchQuery));
  }

  addGame(
    name: string,
    bggThingId: string,
    status: string,
    type: string
  ): Observable<any> {
    const body = {
      name: name,
      bggThingId: bggThingId,
      status: status,
      type: type,
    };

    const token = this.loginAuthService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post(gameEndpoints.addNewGame(), body, {
      headers,
    });
  }

  editGame(status: string, type: string): Observable<any> {
    const body = {
      status: status,
      type: type,
    };
    this.gameId = this.gamesFilterService.getGameId();

    const token = this.loginAuthService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.put(gameEndpoints.editStatType(this.gameId), body, {
      headers,
    });
  }

  deleteGame(): Observable<any> {
    this.gameId = this.gamesFilterService.getGameId();

    const token = this.loginAuthService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.delete(gameEndpoints.deleteGame(this.gameId), {
      headers,
    });
  }
}
