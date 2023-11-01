import { Component, OnInit } from '@angular/core';

import { StatsCalculatorService } from '../services/public/stats-calculator.service';

@Component({
  selector: 'app-checkout-stats',
  templateUrl: './checkout-stats.component.html',
  styleUrls: ['./checkout-stats.component.css']
})
export class CheckoutStatsComponent {
  currentlyBorrowed: number = this.statsService.countCurrentlyBorrowed();;
  totalCheckouts: number = this.statsService.countTotalCheckouts();
  uniqueUsers: number = this.statsService.countUniqueUsers();

  constructor(private statsService: StatsCalculatorService) {}
}
