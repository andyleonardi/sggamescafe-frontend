import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

interface Type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-table-filters',
  templateUrl: './table-filters.component.html',
  styleUrls: ['./table-filters.component.css'],
})
export class TableFiltersComponent {
  panelOpenState = true;
  selectedPlayerCount: number = 4;
  minPlayer: number = 1;
  maxPlayer: number = 20;
  selectedPlayTime: number = 60;
  minTime: number = 15;
  maxTime: number = 300;
  selectedType: string = '';
  

  types: Type[] = [
    { value: 'Two Player', viewValue: '2-Player' },
    { value: 'Light', viewValue: 'Light' },
    { value: 'Next Step', viewValue: 'Next Step' },
    { value: 'Heavy', viewValue: 'Heavy' },
    { value: 'Abstract', viewValue: 'Abstract' },
    { value: 'Escape Games', viewValue: 'Escape Room' },
    { value: 'Co-op', viewValue: 'Co-op' },
    { value: 'Party', viewValue: 'Party' },
    { value: 'Small Games', viewValue: 'Small Games' },
  ];

  formInputs = this.formBuilder.group(
    {
      playerCount: this.selectedPlayerCount,
      playTime: this.selectedPlayTime,
      type: this.selectedType,
    }
  );

  constructor(private formBuilder: FormBuilder) {}

  applyTypeFilter(event: any) {
    // this.games.filter = this.selectedType;
    console.log(this.selectedType);
  }
}
