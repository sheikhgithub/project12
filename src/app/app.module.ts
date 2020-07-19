import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './webpages/home/home.component';
import { LoginComponent } from './webpages/login/login.component';
import { SignupComponent } from './webpages/signup/signup.component';
import { DetailsComponent } from './webpages/details/details.component';
import { NoticeComponent } from './webpages/notice/notice.component';
import { DepartmentComponent } from './webpages/department/department.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    DetailsComponent,
    NoticeComponent,
    DepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
