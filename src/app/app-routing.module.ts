import { ProblemsComponent } from './problems/problems.component';
import { ProblemSetComponent } from './content/problem-set/problem-set.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: ProblemSetComponent},
  {path: 'problems', component: ProblemsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
