export class RecommendedItem {
    label: string;
    id: string;
    percentage: number;
    min: number;
    max: number;
    amount: number | null;
  
    constructor(
      label: string,
      id: string,
      percentage: number,
      min: number,
      max: number,
      amount: number | null = null
    ) {
      this.label = label;
      this.id = id;
      this.percentage = percentage;
      this.min = min;
      this.max = max;
      this.amount = amount;
    }
  }
