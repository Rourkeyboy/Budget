import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { IncomeFormModel } from '../models/income.model';
import { IncomeItem } from '../models/income-item.model';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {
  incomeFormModel: IncomeFormModel;

  constructor() {
    this.incomeFormModel = new IncomeFormModel();
  }

  private items: IncomeItem[] = [
    new IncomeItem('Chaz Income', 'chaz-input', 'Chaz_Income'),
    new IncomeItem('Sydney Income', 'sydney-input', 'Sydney_Income'),
    new IncomeItem('Other Income', 'other-input', 'Other_Income'),
  ];

  getIncomeItems(): IncomeItem[] {
    return this.items;
  }

  getIncomeTotal(): Observable<number> {
    return this.incomeFormModel.incomeAdditionForm.valueChanges.pipe(
      startWith(this.incomeFormModel.incomeAdditionForm.value),
      map(values => {
        return Object.values(values).reduce((acc: number, value) => acc + (Number(value)), 0);
      })
    );
  }
}