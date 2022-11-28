import { Test1Component } from './../components/test1/test1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Document1Component } from '../components/document1/document1.component';
import { Document2Component } from '../components/document2/document2.component';
import { Test2Component } from '../components/test2/test2.component';
const routes: Routes = [
  { path: '', component: Document1Component },
  { path: 'document1', component: Document1Component },
  { path: 'document2', component: Document2Component },
  { path: 'test1', component: Test1Component },
  { path: 'test2', component: Test2Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentRoutingModule {}
