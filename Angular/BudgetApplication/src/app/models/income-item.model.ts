export class IncomeItem {
    label: string;
    id: string;
    formControlName: string;
    amount: number | null;
  
    constructor(
      label: string,
      id: string,
      formControlName: string,
      amount: number | null = null
    ) {
      this.label = label;
      this.id = id;
      this.formControlName = formControlName;
      this.amount = amount;
    }
  }
