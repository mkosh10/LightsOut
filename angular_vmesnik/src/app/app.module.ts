import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProblemNxnComponent} from './components/problem-nxn/problem-nxn.component';
import {AllProblemsPageComponent} from './components/all-problems-page/all-problems-page.component';
import {NewProblemPageComponent} from './components/new-problem-page/new-problem-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProblemNxnComponent,
    AllProblemsPageComponent,
    NewProblemPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
