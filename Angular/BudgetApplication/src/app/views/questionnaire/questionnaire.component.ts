import {Component, inject} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {FinancialInfoService} from '../../services/financial-info.service';
import { IUser } from 'src/app/models/user.model';

/**
 * @title Questionnaire
 */
@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent {
  users: IUser[] = [];
  newUser: IUser = { firstName: '', lastName: '' }
  // private financialInfoService: FinancialInfoService = inject(FinancialInfoService);

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

  constructor(private _formBuilder: FormBuilder, private financialInfoService: FinancialInfoService) {
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.users = this.financialInfoService.getUsers();
  }

  addUser(): void {
    if (this.newUser.firstName) {
      this.financialInfoService.addUser(this.newUser);
      // this.loadUsers(); // Refresh the user list
    }
  }


  // saveInputValue() {
  //   this.FinancialInfoService.setUserValue(this.firstName);
  //   console.log('Value saved:', this.firstName);
  // }

  // getInputValue() {
  //   this.FinancialInfoService.getInputValue();
  // }

}