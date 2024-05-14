import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', 
})

// Service that holds information from the questionnaire
export class FinancialInfoService {
  public firstName: string;
  public lastName: string;
  public income: number | null;
  public expenses: number | null;

  constructor() {
    this.firstName = "";
    this.lastName = "";
    this.income = 0;
    this.expenses = 0;
  }
}
