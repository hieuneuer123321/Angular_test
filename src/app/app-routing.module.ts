import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component';
import { LauncherComponent } from './components/launcher/launcher.component';
import { AuthGuard } from './auth/auth.guard';
import { Document1Component } from './components/document1/document1.component';
import { Document2Component } from './components/document2/document2.component';
import { Test1Component } from './components/test1/test1.component';
import { Test2Component } from './components/test2/test2.component';
import { ListUserComponent } from './components/list-user/list-user.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LauncherComponent },
  // {
  //   path: 'home',
  //   canActivate: [AuthGuard],
  //   component: Document1Component,
  //   children: [
  //     { path: '', component: ListUserComponent },
  //     { path: 'document1', component: ListUserComponent },
  //     { path: 'test1', component: Test1Component },
  //     { path: 'test2', component: Test2Component },
  //     { path: 'document2', component: Document2Component },
  //   ],
  // },
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: Document1Component,
    loadChildren: () =>
      import('./document/document.module').then(
        (module) => module.DocumentModule
      ),
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private router: Router) {}
}
