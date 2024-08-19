import { Component, OnInit } from '@angular/core';

import { IncomeService } from 'src/app/services/income.service';
import { RecommendedService } from 'src/app/services/recommended.service';
import { RecommendedItem } from 'src/app/models/recommended-item.model';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit {
  stepAmount: number = 0.01;
  private income: number | null = null;
  totalRecommendedAmount: number = 0;
  totalPercentage: number = 0;
  greaterThanTotalPercentage: boolean = false;
  equalsTotalPercentage: boolean = false;
  lessThanTotalPercentage: boolean = true;
  sliderMode: string = 'ramsey';
  customPercentage: number = 0;

  recommendedItems: RecommendedItem[] = [];

  constructor(
    private recommendedService: RecommendedService,
    private incomeService: IncomeService,
  ) {}

  ngOnInit(): void {
    this.recommendedItems = this.recommendedService.getRecommendedItems();
    this.incomeService.getIncomeTotal().subscribe(income => {
      this.income = income;
      this.updateAmounts();
    });
  }

  updateAmounts(): void {
    if (this.income !== null) {
      this.recommendedItems.forEach(item => {
        if (this.sliderMode === 'ramsey') {
          item.amount = this.income! * item.percentage;
        } else {
          item.amount = this.income! * this.customPercentage;
        }
      });
      this.calculateTotalRecommendedAmount();
      this.calculateTotalPercentage();
    }
  }

  calculateTotalRecommendedAmount(): void {
    this.totalRecommendedAmount = this.recommendedItems.reduce((total, item) => total + (item.amount ?? 0), 0);
  }

  calculateTotalPercentage(): void {
    const total = this.recommendedItems.reduce((total, item) => {
      return total + (this.sliderMode === 'ramsey' ? item.percentage : this.customPercentage);
    }, 0);
    this.totalPercentage = Math.round(total * 100) / 100;
    this.greaterThanTotalPercentage = this.totalPercentage > 1.001;
    this.lessThanTotalPercentage = this.totalPercentage < 1;
    this.equalsTotalPercentage = this.totalPercentage === 1.00;
  }
}
