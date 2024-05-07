import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BudgetComponent } from './views/budget/budget.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// shared modules
import {MatButtonModule} from '@angular/material/button';
import {SaveDataService} from './services/save-data.service';
// header component and navigation imports
import { HeaderComponent } from './views/header/header.component';
  import {MatIconModule} from '@angular/material/icon';
  import {MatToolbarModule} from '@angular/material/toolbar';
  import {MatSidenavModule} from '@angular/material/sidenav';
// navigation
  import { NavigationComponent } from './views/header/navigation/navigation.component';
    import {MatTreeModule} from '@angular/material/tree';
// stepper component
import { StepperTestComponent } from './views/stepper-test/stepper-test.component';
  import {MatInputModule} from '@angular/material/input';
  import {MatFormFieldModule} from '@angular/material/form-field';
  import {MatStepperModule} from '@angular/material/stepper';
  import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BudgetComponent,

    //Toolbar components
    HeaderComponent,
    NavigationComponent,
    StepperTestComponent
    //End Toolbar components

  ],
  imports: [
    BrowserModule,
    
    //router module
    RouterModule.forRoot([
      //router paths
      {path: 'budget', component: BudgetComponent},
      {path: 'stepper', component: StepperTestComponent},
    ]),
    //END router module
    
    BrowserAnimationsModule,
    
    //Toolbar
    MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatTreeModule,
    //END Toolbar imports

    //Stepper
    MatInputModule, MatFormFieldModule, MatStepperModule, FormsModule, ReactiveFormsModule,
    //END Stepper imports
  ],
  providers: [SaveDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
