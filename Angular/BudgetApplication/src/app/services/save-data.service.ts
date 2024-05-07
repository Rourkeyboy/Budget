import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', 
})
export class SaveDataService {
  financialInfo: FinancialInfo;

  constructor() {
    this.financialInfo = new FinancialInfo(); // Initialize the object
    this.financialInfo.firstName = "Chaz";
  }
}

export class FinancialInfo {
  public firstName: string;
  public lastName: string;
  public income: number | null;

  public constructor() {
      this.firstName = "";
      this.lastName = "";
      this.income = 0;
  }
}
