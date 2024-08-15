import { Injectable } from '@angular/core';
import { ExpenseService } from 'src/app/services/expense.service';
import { IncomeService } from 'src/app/services/income.service';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NetIncomeService {

  constructor(
    private expenseService: ExpenseService,
    private incomeService: IncomeService
  ) { }

  getNetBalance(): Observable<number> {
    return combineLatest([
      this.expenseService.getExpenseTotal(),
      this.incomeService.getIncomeTotal()
    ]).pipe(
      map(([totalExpenses, totalIncome]) => totalIncome - totalExpenses)
    );
  }
}