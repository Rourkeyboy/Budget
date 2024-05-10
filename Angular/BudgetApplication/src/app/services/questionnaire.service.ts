import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', 
})

// Service that holds information from the questionnaire
export class QuestionnaireService {
  FinancialInformation: FinancialInformation;

  constructor() {
    this.FinancialInformation = new FinancialInformation(); // Initialize the object
  }
}

export class FinancialInformation {
  public firstName: string;
  public lastName: string;
  public income: number | null;
  public subscriptions: number | null;

  public constructor() {
      this.firstName = "";
      this.lastName = "";
      this.income = 0;
      this.subscriptions = 0;
  }
}
