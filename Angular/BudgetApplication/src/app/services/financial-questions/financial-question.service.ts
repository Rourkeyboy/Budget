import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FinancialQuestionBase } from './financial-question-base';
import { FinancialTextboxQuestion } from './financial-question-textbox';
//import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinancialQuestionService {

  constructor() { }

  getFinancialQuestions(){
    // this would call an api that houses our question and metadata
    const questions: FinancialQuestionBase<string>[] = [
      new FinancialTextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'rourke',
        required: true,
        order: 1,
      }),

      new FinancialTextboxQuestion({
        key: 'firstNameTwo',
        label: 'First name',
        value: 'chaz',
        type: 'email',
        order: 2,
      }),

      new FinancialTextboxQuestion({
        key: 'firstNameThree',
        label: 'First name',
        value: 'test',
        type: 'email',
        order: 2,
      }),
    ];

    // return the questions according to the order defined
    return questions;
    
    //below is an example of rxjs using of. This may be useful when running to an api to gather data
    //return of(questions.sort((a, b) => a.order - b.order));
    

  }
}
