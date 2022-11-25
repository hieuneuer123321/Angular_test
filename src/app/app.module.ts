import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
