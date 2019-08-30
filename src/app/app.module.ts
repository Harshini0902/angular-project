import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { SearchFormComponent } from './search-form/search-form.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MentorSignupComponent } from './mentor-signup/mentor-signup.component';
import { MentorLoginComponent } from './mentor-login/mentor-login.component';
import { TrainerDetailsComponent } from './trainer-details/trainer-details.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserEditProfileComponent } from './user-edit-profile/user-edit-profile.component';

import { UserCurrentTrainingsComponent } from './user-current-trainings/user-current-trainings.component';
import { UserCompletedTrainingsComponent } from './user-completed-trainings/user-completed-trainings.component';
import { UserPaymentsComponent } from './user-payments/user-payments.component';
import { PlainNavbarComponent } from './plain-navbar/plain-navbar.component';

import { UserSearchComponent } from './user-search/user-search.component';
import { MentorProfileComponent } from './mentor-profile/mentor-profile.component';
import { MentorEditProfileComponent } from './mentor-edit-profile/mentor-edit-profile.component';
import { MentorEditSkillsComponent } from './mentor-edit-skills/mentor-edit-skills.component';
import { MentorTrainingsComponent } from './mentor-trainings/mentor-trainings.component';
import { MentorPaymentsComponent } from './mentor-payments/mentor-payments.component';
import { MentorSidebarComponent } from './mentor-sidebar/mentor-sidebar.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminEditTechnologyComponent } from './admin-edit-technology/admin-edit-technology.component';
import { ChangeCommissionComponent } from './change-commission/change-commission.component';
import { AdminPermissionsComponent } from './admin-permissions/admin-permissions.component';
import { AdminReportsComponent } from './admin-reports/admin-reports.component';
import { HttpClientModule } from '@angular/common/http';

    

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
   SearchFormComponent,
    HomepageComponent,
    LoginComponent,
    SignupComponent,
    MentorSignupComponent,
    MentorLoginComponent,
    TrainerDetailsComponent,
    UserProfileComponent,
    UserEditProfileComponent,
    UserCurrentTrainingsComponent,
    UserCompletedTrainingsComponent,
    UserPaymentsComponent,
    PlainNavbarComponent,
    UserSearchComponent,
    MentorProfileComponent,
    MentorEditProfileComponent,
    MentorEditSkillsComponent,
    MentorTrainingsComponent,
    MentorPaymentsComponent,
    MentorSidebarComponent,
    AdminLoginComponent,
    AdminSidebarComponent,
    AdminEditTechnologyComponent,
    ChangeCommissionComponent,
    AdminPermissionsComponent,
    AdminReportsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
