import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AdminToServerService } from '../services/admin/admin-to-server.service';

@Component({
  selector: 'app-admin-add-game',
  templateUrl: './admin-add-game.component.html',
  styleUrls: ['./admin-add-game.component.css'],
})
export class AdminAddGameComponent {
  // searchQuery: string = '';
  searchResult: [] = [];
  gameToBeAdded: Object = {
    name: null,
    bggThingId: null,
  };
  form: FormGroup = new FormGroup({
    searchQuery: new FormControl(''),
  });

  displayedColumns: string[] = ['game', 'add'];

  constructor(
    private adminToServerService: AdminToServerService,
  ) {}

  handleSearch() {
    this.gameToBeAdded = {name: null, bggThingId: null};
    this.adminToServerService.storeQuery(this.form.value.searchQuery);
    this.adminToServerService.searchBGG().subscribe((res) => {
      this.searchResult = res.data.result;
    });
  }

  addGame(game: Object) {
    console.log('Added ', game);
    this.gameToBeAdded = game;
    this.searchResult = [];
  }
}
