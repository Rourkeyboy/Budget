import { Component } from '@angular/core';

import { IncomeService } from 'src/app/services/income.service';
import { IncomeItem } from 'src/app/models/income-item.model';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent {
  totalIncome: number | null = null;

  incomeItems: IncomeItem[] = [];

  constructor( private incomeService: IncomeService ) { }
  
  ngOnInit() {
    this.incomeItems = this.incomeService.getIncomeItems();
    this.incomeService.getIncomeTotal().subscribe(total => {
      this.totalIncome = total;
    });
  }

  get incomeAdditionForm() {
    return this.incomeService.incomeFormModel;
  }
}
