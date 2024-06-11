import { Component, Input } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { FinancialQuestionBase } from 'src/app/services/financial-questions/financial-question-base';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  @Input() question!: FinancialQuestionBase<string>;
  @Input() form!: FormGroup;

  get IsValid(){
    return this.form.controls[this.question.key].valid;
  }
}
