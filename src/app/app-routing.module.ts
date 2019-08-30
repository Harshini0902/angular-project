import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchFormComponent } from './search-form/search-form.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MentorSignupComponent } from './mentor-signup/mentor-signup.component';
import { MentorLoginComponent } from './mentor-login/mentor-login.component';
import { TrainerDetailsComponent } from './trainer-details/trainer-details.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserEditProfileComponent } from './user-edit-profile/user-edit-profile.component';
import { UserCurrentTrainingsComponent } from './user-current-trainings/user-current-trainings.component';
import { UserCompletedTrainingsComponent } from './user-completed-trainings/user-completed-trainings.component';
import { UserSearchComponent } from './user-search/user-search.component';
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



const routes: Routes = [
    {path:'',component:HomepageComponent},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'mentor-signup',component:MentorSignupComponent},
    {path:'mentor-login',component:MentorLoginComponent},
    {path:'trainer-details',component:TrainerDetailsComponent},
    {path:'trainers/:techName',component:TrainerDetailsComponent},
    {path:'profile',component:UserProfileComponent},
    {path:'edit-profile',component:UserEditProfileComponent},
    {path:'logoff',component:HomepageComponent},
    {path:'current-trainings',component:UserCurrentTrainingsComponent},
    {path:'completed-trainings',component:UserCompletedTrainingsComponent},
    {path:'user-search',component:UserSearchComponent},
    {path:'mentor-profile',component:MentorProfileComponent},
    {path:'mentor-edit-profile',component:MentorEditProfileComponent},
    {path:'mentor-trainings',component:MentorTrainingsComponent},
    {path:'mentor-edit-skills',component:MentorEditSkillsComponent},
    {path:'mentor-payments',component:MentorPaymentsComponent},
    {path:'admin-login',component:AdminLoginComponent},
    {path:'admin-permissions',component:AdminPermissionsComponent},
    {path:'admin-edit-technology',component:AdminEditTechnologyComponent},
    {path:'change-commission',component:ChangeCommissionComponent},
    {path:'admin-reports',component:AdminReportsComponent},
    {path:'admin-logoff',component:AdminLoginComponent},

    
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
