import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LauncherComponent } from './components/launcher/launcher.component';
import { LoginComponent } from './components/login/login.component';
import { Document1Component } from './components/document1/document1.component';
import { Document2Component } from './components/document2/document2.component';
import { Test1Component } from './components/test1/test1.component';
import { Test2Component } from './components/test2/test2.component';
import { SideComponent } from './components/side/side.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertLoginComponent } from './components/alert-login/alert-login.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { ChangeTextDirective } from './change-text.directive';
import { NumberInputDirective } from './number-input.directive';
@NgModule({
  declarations: [
    AppComponent,
    LauncherComponent,
    LoginComponent,
    Document1Component,
    Document2Component,
    Test1Component,
    Test2Component,
    SideComponent,
    AlertLoginComponent,
    ListUserComponent,
    DirectiveComponent,
    ChangeTextDirective,
    NumberInputDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
