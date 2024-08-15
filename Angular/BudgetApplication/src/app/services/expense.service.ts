import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ExpenseFormModel } from '../models/expense.model';
import { ExpenseItem } from '../models/expense-item.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  expenseFormModel: ExpenseFormModel;

  constructor() { 
    this.expenseFormModel = new ExpenseFormModel();
  }

  private items: ExpenseItem[] = [
    new ExpenseItem('Giving', 'giving-input', 'Giving_Expense'),
    new ExpenseItem('Saving', 'saving-input', 'Saving_Expense'),
    new ExpenseItem('Housing', 'housing-input', 'Housing_Expense'),
    new ExpenseItem('Utilities', 'utilities-input', 'Utilities_Expense'),
    new ExpenseItem('Food', 'food-input', 'Food_Expense'),
    new ExpenseItem('Transportation', 'transportation-input', 'Transportation_Expense'),
    new ExpenseItem('Clothing', 'clothing-input', 'Clothing_Expense'),
    new ExpenseItem('Medical', 'medical-input', 'Medical_Expense'),
    new ExpenseItem('Personal', 'personal-input', 'Personal_Expense'),
    new ExpenseItem('Recreation', 'recreation-input', 'Recreation_Expense'),
    new ExpenseItem('Debt', 'debt-input', 'Debt_Expense'),
  ];

  getExpenseItems(): ExpenseItem[] {
    return this.items;
  }

  getExpenseTotal(): Observable<number> {
    return this.expenseFormModel.expenseForm.valueChanges.pipe(
      startWith(this.expenseFormModel.expenseForm.value),
      map(values => {
        return Object.values(values).reduce((acc: number, value) => acc + (Number(value)), 0);
      })
    );
  }
}