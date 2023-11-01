import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

// import { games } from 'src/games';
import { GamesFilterService } from '../services/public/games-filter.service';

interface Type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-table-display',
  templateUrl: './table-display.component.html',
  styleUrls: ['./table-display.component.css'],
})
export class TableDisplayComponent implements OnInit {
  @Input() selectedType: string = '';

  panelOpenState = true;
  selectedPlayerCount: number = 4;
  minPlayer: number = 1;
  maxPlayer: number = 20;
  selectedPlayTime: number = 60;
  minTime: number = 15;
  maxTime: number = 300;
  // selectedType: string = '';
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

  formInputs = this.formBuilder.group({
    playerCount: this.selectedPlayerCount,
    playTime: this.selectedPlayTime,
    type: this.selectedType,
  });

  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['thumbnail', 'game', 'status'];

  constructor(
    private gamesFilterService: GamesFilterService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    // this.games.filter = this.selectedType;
    this.gamesFilterService.getGames().subscribe((res) => {
      const nonRemovedGames = res.data.games.filter(
        (game: any) => game.status !== 'Removed'
      );
      this.dataSource = new MatTableDataSource(nonRemovedGames);
      this.dataSource.filter = this.selectedType;
      this.dataSource.paginator = this.paginator;
      // console.log('response', res.data.games);
      // console.log('data', this.dataSource);
    });
  }

  applyPlayerFilter(event: any) {
    this.dataSource.filterPredicate = (data: any, filter: string) => !filter || (Number(data.minPlayer) >= Number(filter) && Number(data.maxPlayer) <= Number(filter));
    this.dataSource.filter = this.formInputs.value.playerCount!.toString();
  }

  applyPlayTimeFilter(event: any) {
    this.dataSource.filterPredicate = (data: any, filter: string) => !filter || (Number(data.minPlaytime) <= Number(filter) && Number(data.maxPlaytime) <= Number(filter));
    this.dataSource.filter = this.formInputs.value.playTime!.toString();
  }

  applyTypeFilter(event: any) {
    // console.log(this.formInputs.value.type);
    this.dataSource.filter = this.formInputs.value.type!;
  }
}
