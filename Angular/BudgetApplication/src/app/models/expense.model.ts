import { FormGroup, FormControl, Validators } from '@angular/forms';

export class ExpenseFormModel {
  expenseForm: FormGroup;

  constructor() {
    this.expenseForm = new FormGroup({
      'Giving_Expense':  new FormControl(null, [Validators.required]),
      'Saving_Expense':  new FormControl(null, [Validators.required]),
      'Housing_Expense':  new FormControl(null, [Validators.required]),
      'Utilities_Expense':  new FormControl(null, [Validators.required]),
      'Food_Expense':  new FormControl(null, [Validators.required]),
      'Transportation_Expense':  new FormControl(null, [Validators.required]),
      'Clothing_Expense':  new FormControl(null, [Validators.required]),
      'Medical_Expense':  new FormControl(null, [Validators.required]),
      'Personal_Expense':  new FormControl(null, [Validators.required]),
      'Recreation_Expense': new FormControl(null, [Validators.required]),
      'Debt_Expense': new FormControl(null, [Validators.required])
    });
  }
}