import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FinancialQuestionBase } from './financial-question-base';


@Injectable({
  providedIn: 'root'
})
export class FinancialQuestionControlService {
  toFormGroup(financialQuestions: FinancialQuestionBase<string>[]) {
    const group: any = {};

    financialQuestions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    });

    return new FormGroup(group);
  }

  getSections(questions: FinancialQuestionBase<string>[][]) {
    return [
      {
        sectionName: 'Personal Information',
        questions: questions[0],
      },
       {
         sectionName: 'Financial Information',
         questions: questions[1],
       },
      // Add more sections as needed
    ];
  }
}