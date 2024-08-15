import { Injectable } from '@angular/core';
import { IncomeService } from './income.service';
import { RecommendedItem } from '../models/recommended-item.model';

@Injectable({
  providedIn: 'root'
})
export class RecommendedService {
  constructor(private incomeService: IncomeService) {}
  private items: RecommendedItem[] = [
    new RecommendedItem('Giving', 'giving-slider', 0.10, 0.10, 0.15),
    new RecommendedItem('Saving', 'savings-slider', 0.05, 0.05, 0.10),
    new RecommendedItem('Housing', 'housing-slider', 0.25, 0.25, 0.35),
    new RecommendedItem('Utilities', 'utilities-slider', 0.05, 0.05, 0.10),
    new RecommendedItem('Food', 'food-slider', 0.05, 0.05, 0.15),
    new RecommendedItem('Transportation', 'transportation-slider', 0.10, 0.10, 0.15),
    new RecommendedItem('Clothing', 'clothing-slider', 0.02, 0.02, 0.07),
    new RecommendedItem('Medical', 'medical-slider', 0.05, 0.05, 0.10),
    new RecommendedItem('Personal', 'personal-slider', 0.05, 0.05, 0.10),
    new RecommendedItem('Recreation', 'recreation-slider', 0.05, 0.05, 0.10),
    new RecommendedItem('Debt', 'debt-slider', 0.05, 0.05, 0.10)
  ];

  getRecommendedItems(): RecommendedItem[] {
    return this.items;
  }
}