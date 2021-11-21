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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProblemSetComponent,
    ProblemsComponent,
    ProblemDetailsComponent,
    EditorComponent
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
