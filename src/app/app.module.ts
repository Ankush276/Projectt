import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes,} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { EditUserComponent } from './Components/edit-user/edit-user.component';
import { UsersListComponent } from './Components/users-list/users-list.component';
import { AllFunctionalityComponent } from './Components/all-functionality/all-functionality.component';
import { LoginPageComponent } from './Components/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    EditUserComponent,
    UsersListComponent,
    AllFunctionalityComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
