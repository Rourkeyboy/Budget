import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionGroupComponent } from './question-group.component';

describe('QuestionGroupComponent', () => {
  let component: QuestionGroupComponent;
  let fixture: ComponentFixture<QuestionGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionGroupComponent]
    });
    fixture = TestBed.createComponent(QuestionGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
