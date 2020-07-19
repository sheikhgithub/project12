import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './webpages/home/home.component';
import { LoginComponent } from './webpages/login/login.component';
import { SignupComponent } from './webpages/signup/signup.component';
import { DetailsComponent } from './webpages/details/details.component';
import { NoticeComponent } from './webpages/notice/notice.component';
import { DepartmentComponent } from './webpages/department/department.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component:SignupComponent
  },
  {
    path: 'department',
    component: DepartmentComponent
  },
  {
    path:'details',
    component:DetailsComponent
  },
  {
    path: 'notice',
    component: NoticeComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
