import { Component, OnInit } from '@angular/core';

import { ExpenseService } from 'src/app/services/expense.service';
import { ExpenseItem } from 'src/app/models/expense-item.model';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent {
  totalExpense: number | null = null;

  expenseItems: ExpenseItem[] = [];

  constructor(private expenseService: ExpenseService) { }

  ngOnInit() {
    this.expenseItems = this.expenseService.getExpenseItems();
    this.expenseService.getExpenseTotal().subscribe(total => {
      this.totalExpense = total;
    });
  }

  get expenseForm() {
    return this.expenseService.expenseFormModel;
  }
}