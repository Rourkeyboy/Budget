import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ExpenseService } from 'src/app/services/expense.service';
import { IncomeService } from 'src/app/services/income.service';


@Injectable({
  providedIn: 'root'
})
export class NetIncomeService {

  constructor(
    private expenseService: ExpenseService,
    private incomeService: IncomeService
  ) { }

  getNetTotal(): Observable<number> {
    return combineLatest([
      this.expenseService.getExpenseTotal(),
      this.incomeService.getIncomeTotal()
    ]).pipe(
      map(([totalExpenses, totalIncome]) => totalIncome - totalExpenses)
    );
  }
}