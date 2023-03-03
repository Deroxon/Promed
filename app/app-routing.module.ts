import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { MailComponent } from './dashboard/mail/mail.component';
import { MedicalDocumentationComponent } from './dashboard/medical-documentation/medical-documentation.component';
import { PatientsComponent } from './dashboard/patients/patients.component';
import { UpdatesComponent } from './dashboard/updates/updates.component';
import { WikiComponent } from './dashboard/wiki/wiki.component';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { CourseGuardService } from './shared/course-guard.service';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: UpdatesComponent, canActivate: [CourseGuardService], children: [
    {path: 'medical-documentation', component: MedicalDocumentationComponent},
    {path: 'patients', component: PatientsComponent},
    {path: 'wiki', component: WikiComponent},
    {path: 'mail', component: MailComponent},
  ]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'verify-email', component: VerifyEmailComponent},
  {path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
