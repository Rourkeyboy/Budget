import { TestBed } from '@angular/core/testing';

import { FinancialQuestionService } from './financial-question.service';

describe('FinancialQuestionService', () => {
  let service: FinancialQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinancialQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
