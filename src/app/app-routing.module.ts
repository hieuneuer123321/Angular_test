import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component';
import { LauncherComponent } from './components/launcher/launcher.component';
import { Document1Component } from './components/document1/document1.component';
import { Document2Component } from './components/document2/document2.component';
import { Test1Component } from './components/test1/test1.component';
import { Test2Component } from './components/test2/test2.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LauncherComponent },
  { path: 'login/document1', component: Document1Component },
  { path: 'document1', component: Document1Component },
  { path: 'document2', component: Document2Component },
  { path: 'login/test1', component: Test1Component },
  { path: 'login/test2', component: Test2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private router: Router) {}
}
