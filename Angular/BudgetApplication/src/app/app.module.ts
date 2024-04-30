import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BudgetComponent } from './views/budget/budget.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// header component and navigation imports
import { HeaderComponent } from './views/header/header.component';
  import {MatIconModule} from '@angular/material/icon';
  import {MatButtonModule} from '@angular/material/button';
  import {MatToolbarModule} from '@angular/material/toolbar';
  import {MatSidenavModule} from '@angular/material/sidenav';
// navigation
  import { NavigationComponent } from './views/header/navigation/navigation.component';
    import {MatTreeModule} from '@angular/material/tree';

@NgModule({
  declarations: [
    AppComponent,
    BudgetComponent,

    //Toolbar components
    HeaderComponent,
    NavigationComponent
    //End Toolbar components

  ],
  imports: [
    BrowserModule,
    
    //router module
    RouterModule.forRoot([
      //router paths
      {path: 'budget', component: BudgetComponent},
    ]),
    //END router module
    
    BrowserAnimationsModule,
    
    //Toolbar
    MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatTreeModule
    //END Toolbar imports

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
