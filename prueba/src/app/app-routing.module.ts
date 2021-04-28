import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SequenceComponent } from './sequence/sequence.component';
import { ResultsComponent } from './results/results.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sequence/:id', component: SequenceComponent },
  { path: 'results', component: ResultsComponent },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
