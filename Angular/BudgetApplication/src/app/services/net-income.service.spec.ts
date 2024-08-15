import { TestBed } from '@angular/core/testing';

import { NetIncomeService } from './net-income.service';

describe('NetIncomeService', () => {
  let service: NetIncomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetIncomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
