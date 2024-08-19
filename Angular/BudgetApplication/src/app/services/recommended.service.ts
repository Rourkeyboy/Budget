import { Injectable } from '@angular/core';
import { RecommendedItem } from '../models/recommended-item.model';

@Injectable({
  providedIn: 'root'
})
export class RecommendedService {
  customMin = 0;
  customMax = 100;

  constructor() {}

  private ramseyItems: RecommendedItem[] = [
    new RecommendedItem('Giving', 'giving-slider', 10, 10, 15),
    new RecommendedItem('Saving', 'savings-slider', 5, 5, 10),
    new RecommendedItem('Housing', 'housing-slider', 25, 25, 35),
    new RecommendedItem('Utilities', 'utilities-slider', 5, 5, 10),
    new RecommendedItem('Food', 'food-slider', 5, 5, 15),
    new RecommendedItem('Transportation', 'transportation-slider', 10, 10, 15),
    new RecommendedItem('Clothing', 'clothing-slider', 2, 2, 7),
    new RecommendedItem('Medical', 'medical-slider', 5, 5, 10),
    new RecommendedItem('Personal', 'personal-slider', 5, 5, 10),
    new RecommendedItem('Recreation', 'recreation-slider', 5, 5, 10),
    new RecommendedItem('Debt', 'debt-slider', 5, 5, 10)
  ];

  private customItems: RecommendedItem[] = [
    new RecommendedItem('Giving', 'giving-slider', this.customMin, this.customMin, this.customMax),
    new RecommendedItem('Saving', 'savings-slider', this.customMin, this.customMin, this.customMax),
    new RecommendedItem('Housing', 'housing-slider', this.customMin, this.customMin, this.customMax),
    new RecommendedItem('Utilities', 'utilities-slider', this.customMin, this.customMin, this.customMax),
    new RecommendedItem('Food', 'food-slider', this.customMin, this.customMin, this.customMax),
    new RecommendedItem('Transportation', 'transportation-slider', this.customMin, this.customMin, this.customMax),
    new RecommendedItem('Clothing', 'clothing-slider', this.customMin, this.customMin, this.customMax),
    new RecommendedItem('Medical', 'medical-slider', this.customMin, this.customMin, this.customMax),
    new RecommendedItem('Personal', 'personal-slider', this.customMin, this.customMin, this.customMax),
    new RecommendedItem('Recreation', 'recreation-slider', this.customMin, this.customMin, this.customMax),
    new RecommendedItem('Debt', 'debt-slider', this.customMin, this.customMin, this.customMax)
  ];

  getRamseyItems(): RecommendedItem[] {
    return this.ramseyItems;
  }

  getCustomItems(): RecommendedItem[] {
    return this.customItems;
  }
}