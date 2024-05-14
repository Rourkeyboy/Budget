import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BudgetComponent } from './views/budget/budget.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// shared modules
import {MatButtonModule} from '@angular/material/button';
import {FinancialInfoService} from './services/financial-info.service';
// header component and navigation imports
  import {MatIconModule} from '@angular/material/icon';
  import {MatToolbarModule} from '@angular/material/toolbar';
  import {MatSidenavModule} from '@angular/material/sidenav';

//
    import {MatTreeModule} from '@angular/material/tree';
// stepper component
import { QuestionnaireComponent } from './views/questionnaire/questionnaire.component';
  import {MatInputModule} from '@angular/material/input';
  import {MatFormFieldModule} from '@angular/material/form-field';
  import {MatStepperModule} from '@angular/material/stepper';
  import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    BudgetComponent,

    //Toolbar components
    NavigationComponent,
    QuestionnaireComponent
    //End Toolbar components

  ],
  imports: [
    BrowserModule,
    
    //router module
    RouterModule.forRoot([
      //router paths
      {path: 'budget', component: BudgetComponent},
      {path: 'questionnaire', component: QuestionnaireComponent},
    ]),
    //END router module
    
    BrowserAnimationsModule,
    
    //Toolbar
    MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatTreeModule, 
    //END Toolbar imports

    //Stepper
    MatInputModule, MatFormFieldModule, MatStepperModule, FormsModule, ReactiveFormsModule, MatListModule,
    //END Stepper imports
  ],
  providers: [FinancialInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
