import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {FinancialInfoService} from '../../services/financial-info.service';

/**
 * @title Questionnaire
 */
@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent {
  firstName: string;
  income: number;
  expense: number;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  isLinear = false;
  hide = true;

  FinancialInfoService: FinancialInfoService;

  constructor(private _formBuilder: FormBuilder, financialInfoService: FinancialInfoService) {
    this.income = 0;
    this.expense = 0;

    this.FinancialInfoService = financialInfoService;
    this.firstName = this.FinancialInfoService.getInputValue();
    // this.firstName = this.FinancialInfoService.getNameValue();
  }

  saveInputValue() {
    this.FinancialInfoService.setInputValue(this.firstName);
    console.log('Value saved:', this.firstName);
  }

  getInputValue() {
    this.FinancialInfoService.getInputValue();
  }

}