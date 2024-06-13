import { Injectable } from '@angular/core';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root', 
})

// Service that holds information from the questionnaire
export class FinancialInfoService {
    private users: IUser[] = [];
  
    constructor() { 
    }
  
    addUser(user: IUser) {
      this.users.push(user);
    }
  
    getUsers(): IUser[] {
      return this.users;
    }
}
