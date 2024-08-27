import { Component, OnInit } from '@angular/core';

import { NetIncomeService } from 'src/app/services/net-income.service';

@Component({
  selector: 'app-net-income',
  templateUrl: './net-income.component.html',
  styleUrls: ['./net-income.component.css']
})
export class NetIncomeComponent implements OnInit {
  totalNetIncome: number | null = null;

  constructor( private netIncomeService: NetIncomeService ) { }
  
  ngOnInit() {
    this.netIncomeService.getNetTotal().subscribe(netIncome => {
      this.totalNetIncome = netIncome;
    });
  }
}