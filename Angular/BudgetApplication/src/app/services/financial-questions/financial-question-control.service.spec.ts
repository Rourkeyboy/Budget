import { TestBed } from '@angular/core/testing';

import { FinancialQuestionControlService } from './financial-question-control.service';

describe('FinancialQuestionControlService', () => {
  let service: FinancialQuestionControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinancialQuestionControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
