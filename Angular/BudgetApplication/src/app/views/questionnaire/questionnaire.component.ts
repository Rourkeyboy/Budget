import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {FinancialInfoService} from '../../services/financial-info.service';
import { FinancialQuestionBase } from 'src/app/services/financial-questions/financial-question-base';
import { FinancialQuestionService } from 'src/app/services/financial-questions/financial-question.service';

/**
 * @title Questionnaire
 */
@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  personalInformationFormGroup = this._formBuilder.group({
    firstNameCtrl: ['', Validators.required],
    lastNameCtrl: ['', Validators.required],
    addressNameCtrl: ['', Validators.required],
  });
  isLinear = false;
  hide = true;

  FinancialInfoService: FinancialInfoService;
  FinancialQS: FinancialQuestionService;

  questions: FinancialQuestionBase<string>[];

  constructor(private _formBuilder: FormBuilder, financialInfoService: FinancialInfoService, financialQS: FinancialQuestionService) {
    this.FinancialInfoService = financialInfoService;
    this.FinancialQS = financialQS;
    this.questions = this.FinancialQS.getFinancialQuestions();

  }

  onSubmit() : void {
    if (this.personalInformationFormGroup.valid) {
      // Serialize form data to JSON
      const formData = this.personalInformationFormGroup.value;
      console.log('Form Data:', formData);

      // Here you can pass the formData to another service for further processing
    }
  }
}