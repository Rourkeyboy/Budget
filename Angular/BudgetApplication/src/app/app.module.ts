import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BudgetComponent } from './views/budget/budget.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    BudgetComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'budget', component: BudgetComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
