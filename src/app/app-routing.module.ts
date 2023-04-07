import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './Components/users-list/users-list.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { EditUserComponent } from './Components/edit-user/edit-user.component';
import { AllFunctionalityComponent } from './Components/all-functionality/all-functionality.component';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'func',component:AllFunctionalityComponent},
  {path:'login',component:LoginPageComponent},
  // {path:'users/logout',component:AppComponent},
  {path:'func/users',component:UsersListComponent},
  {path:'func/users/add',component:AddUserComponent},
  {path:'users/edit/:id',component:EditUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
