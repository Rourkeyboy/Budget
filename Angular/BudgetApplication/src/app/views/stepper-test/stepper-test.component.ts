import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {SaveDataService} from '../../services/save-data.service';


/**
 * @title Stepper vertical
 */
@Component({
  selector: 'app-stepper-test',
  templateUrl: './stepper-test.component.html',
  styleUrls: ['./stepper-test.component.css']
})
export class StepperTestComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  SaveDataService: SaveDataService;

  constructor(private _formBuilder: FormBuilder, saveDataService: SaveDataService) {

    this.SaveDataService = saveDataService;
  }
}
