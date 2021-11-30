import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SolutionComponent } from './problems/solution/solution.component';
import { ProblemsComponent } from './problems/problems.component';
import { ProblemSetComponent } from './content/problem-set/problem-set.component';
import { DiscussComponent } from './problems/discuss/discuss.component';
import { SubmissionsComponent } from './problems/submissions/submissions.component';

const routes: Routes = [
  {path: '', component: ProblemSetComponent},
  {path: 'problems', component: ProblemsComponent},
  {path: 'solution', component: SolutionComponent},
  {path: 'discuss', component: DiscussComponent},
  {path: 'submissions', component: SubmissionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
