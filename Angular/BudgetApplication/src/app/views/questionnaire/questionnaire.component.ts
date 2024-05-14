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

    this.FinancialInfoService = financialInfoService;
  }
}