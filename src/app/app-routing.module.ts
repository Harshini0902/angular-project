import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchFormComponent } from './search-form/search-form.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MentorSignupComponent } from './mentor-signup/mentor-signup.component';
import { MentorLoginComponent } from './mentor-login/mentor-login.component';
import { TrainerDetailsComponent } from './trainer-details/trainer-details.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserEditProfileComponent } from './user-edit-profile/user-edit-profile.component';
import { UserCurrentTrainingsComponent } from './user-current-trainings/user-current-trainings.component';
import { UserCompletedTrainingsComponent } from './user-completed-trainings/user-completed-trainings.component';
import { MentorProfileComponent } from './mentor-profile/mentor-profile.component';
import { MentorEditProfileComponent } from './mentor-edit-profile/mentor-edit-profile.component';
import { MentorTrainingsComponent } from './mentor-trainings/mentor-trainings.component';
import { MentorEditSkillsComponent } from './mentor-edit-skills/mentor-edit-skills.component';
import { MentorPaymentsComponent } from './mentor-payments/mentor-payments.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPermissionsComponent } from './admin-permissions/admin-permissions.component';
import { AdminEditTechnologyComponent } from './admin-edit-technology/admin-edit-technology.component';
import { ChangeCommissionComponent } from './change-commission/change-commission.component';
import { AdminReportsComponent } from './admin-reports/admin-reports.component';
import { NavbarOnlyLayoutComponent } from './layouts/navbar-only-layout/navbar-only-layout.component';
import { NavbarAndSidebarLayoutComponent } from './layouts/navbar-and-sidebar-layout/navbar-and-sidebar-layout.component';
import { UserPaymentsComponent } from './user-payments/user-payments.component';



const routes: Routes = [
    {path:'',component:NavbarOnlyLayoutComponent,
    children:[
      {path:'',component:SearchFormComponent},
      {path:'login',component:LoginComponent},
      {path:'signup',component:SignupComponent},
      {path:'mentor-login',component:MentorLoginComponent},
      {path:'mentor-signup',component:MentorSignupComponent},
      {path:'logoff',component:LoginComponent},
      {path:'mentor-logoff',component:MentorLoginComponent},
      {path:'admin-login',component:AdminLoginComponent},
      {path:'admin-logoff',component:AdminLoginComponent},
     
    
    ]
  },
  {path:'',component:NavbarAndSidebarLayoutComponent,
    children:[
      {path:'profile',component:UserProfileComponent},
      {path:'edit-profile',component:UserEditProfileComponent},
      {path:'current-trainings',component:UserCurrentTrainingsComponent},
      {path:'completed-trainings',component:UserCompletedTrainingsComponent},
      {path:'user-search',component:SearchFormComponent},
      
      {path:'mentor-profile',component:MentorProfileComponent},
    {path:'mentor-edit-profile',component:MentorEditProfileComponent},
    {path:'mentor-trainings',component:MentorTrainingsComponent},
    {path:'mentor-edit-skills',component:MentorEditSkillsComponent},
    {path:'mentor-payments',component:MentorPaymentsComponent},
    {path:'admin-permissions',component:AdminPermissionsComponent},
    {path:'admin-edit-technology',component:AdminEditTechnologyComponent},
    {path:'change-commission',component:ChangeCommissionComponent},
    {path:'admin-reports',component:AdminReportsComponent},
    {path:'payments',component:UserPaymentsComponent}
    
    ]
  },
  
  {path:'trainers/:techName',component:TrainerDetailsComponent},
  
   
    
   

  {path:'**',pathMatch:'full',redirectTo:''}
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
