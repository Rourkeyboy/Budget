import {Component} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {FinancialInfoService} from '../../services/financial-info.service';
import { FinancialQuestionBase } from 'src/app/services/financial-questions/financial-question-base';
import { FinancialQuestionService } from 'src/app/services/financial-questions/financial-question.service';
import { FinancialQuestionControlService } from 'src/app/services/financial-questions/financial-question-control.service';

/**
 * @title Questionnaire
 */
@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent {
  isLinear = false;
  hide = true;

  FinancialInfoService: FinancialInfoService;
  FinancialQS: FinancialQuestionService;

  formGroups: { [key: string]: FormGroup } = {};
  sections: any[];

  questions: FinancialQuestionBase<string>[][] = [];

  constructor(private _formBuilder: FormBuilder, financialInfoService: FinancialInfoService, financialQS: FinancialQuestionService, financialQCS: FinancialQuestionControlService) {
    this.FinancialInfoService = financialInfoService;
    this.FinancialQS = financialQS;
    this.questions.push(this.FinancialQS.getPersonalInfoQuestions());
    this.questions.push(this.FinancialQS.getFinancialQuestions());

    //this._formBuilder.group(financialQCS.toFormGroup(this.questions));
    this.sections = financialQCS.getSections(this.questions);
        // Initialize a FormGroup for each section
    this.sections.forEach(section => {
      this.formGroups[section.sectionName] = financialQCS.toFormGroup(section.questions);
    });

  }

  onSubmit() : void {
  //   if (this.personalInformationFormGroup.valid) {
  //     // Serialize form data to JSON
  //     const formData = this.personalInformationFormGroup.value;
  //     console.log('Form Data:', formData);

  //     // Here you can pass the formData to another service for further processing
  //   }
  }
}