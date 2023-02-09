import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { UpdatesComponent } from './dashboard/updates/updates.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MedicalDocumentationComponent } from './dashboard/medical-documentation/medical-documentation.component';
import { PatientsComponent } from './dashboard/patients/patients.component';

import { WikiComponent } from './dashboard/wiki/wiki.component';
import { MailComponent } from './dashboard/mail/mail.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';


import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from "@angular/material/input"
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    NotFoundComponent,
    UpdatesComponent,
    MedicalDocumentationComponent,
    PatientsComponent,
    WikiComponent,
    MailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),

    // Ng Material
    MatSnackBarModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
