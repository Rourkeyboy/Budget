import { FormGroup, FormControl, Validators } from '@angular/forms';

export class IncomeFormModel {
  incomeAdditionForm: FormGroup;

  constructor() {
    this.incomeAdditionForm = new FormGroup({
      'Chaz_Income':  new FormControl(null, [Validators.required]),
      'Sydney_Income':  new FormControl(null, [Validators.required]),
      'Other_Income':  new FormControl(null, [Validators.required]),
    });
  }
}