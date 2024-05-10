import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {QuestionnaireService} from '../../services/questionnaire.service';


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
  isLinear = false;

  QuestionnaireService: QuestionnaireService;

  constructor(private _formBuilder: FormBuilder, questionnaireService: QuestionnaireService) {

    this.QuestionnaireService = questionnaireService;
  }
}
