import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FinancialQuestionBase } from './financial-question-base';
import { FinancialTextboxQuestion } from './financial-question-textbox';
import { FinancialDropdownQuestion } from './financial-question-dropdown';
//import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinancialQuestionService {

  constructor() { }

  getPersonalInfoQuestions(){
    // this would call an api that houses our question and metadata
    const questions: FinancialQuestionBase<string>[] = [
      new FinancialTextboxQuestion({
        key: 'firstNameCtrl',
        label: 'First name',
        value: 'John',
        required: true,
        order: 1,
      }),

      new FinancialTextboxQuestion({
        key: 'lastNameCtrl',
        label: 'Last name',
        value: 'Snow',
        //type: 'email',
        order: 2,
      }),

      new FinancialTextboxQuestion({
        key: 'addressNameCtrl',
        label: 'Address',
        value: '123 John Snow lives here',
        //type: 'email',
        order: 3,
      }),
      new FinancialDropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),
    ];

    // return the questions according to the order defined
    return questions;
    
    //below is an example of rxjs using of. This may be useful when running to an api to gather data
    //return of(questions.sort((a, b) => a.order - b.order));
    

  }

  getFinancialQuestions(){
    // this would call an api that houses our question and metadata
    const questions: FinancialQuestionBase<string>[] = [
      new FinancialTextboxQuestion({
        key: 'incomeEarned',
        label: 'Yearly Income',
        value: '$50,000',
        required: true,
        order: 1,
      }),
      new FinancialDropdownQuestion({
        key: 'dependents',
        label: 'Number of Dependents',
        options: [
          {key: 'one',  value: '1'},
          {key: 'two',  value: '2'},
          {key: 'three',   value: '3'},
          {key: 'four', value: '4'}
        ],
        order: 2
      }),
    ];

    // return the questions according to the order defined
    return questions;
    
    //below is an example of rxjs using of. This may be useful when running to an api to gather data
    //return of(questions.sort((a, b) => a.order - b.order));
    

  }
}
