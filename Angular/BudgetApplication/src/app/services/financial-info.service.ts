import { Injectable } from '@angular/core';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root', 
})

// Service that holds information from the questionnaire
export class FinancialInfoService {
    private name!: string;
  
    constructor() { 
    }
  
    setInputValue(value: string) {
      this.name = value;
    }
  
    getInputValue(): string{
      return this.name;
    }
}
