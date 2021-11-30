import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './navigation/header/header.component';
import { ProblemSetComponent } from './content/problem-set/problem-set.component';
import { ProblemsComponent } from './problems/problems.component';
import { ProblemDetailsComponent } from './problems/problem-details/problem-details.component';
import { EditorComponent } from './problems/editor/editor.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { DiscussComponent } from './problems/discuss/discuss.component';
import { SubmissionsComponent } from './problems/submissions/submissions.component';
import { SubmissionsDetailsComponent } from './problems/submissions/submissions-details/submissions-details.component';
import { SolutionComponent } from './problems/solution/solution.component';
import { SolutionDetailsComponent } from './problems/solution/solution-details/solution-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProblemSetComponent,
    ProblemsComponent,
    ProblemDetailsComponent,
    EditorComponent,
    SidenavListComponent,
    DiscussComponent,
    SubmissionsComponent,
    SubmissionsDetailsComponent,
    SolutionComponent,
    SolutionDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
