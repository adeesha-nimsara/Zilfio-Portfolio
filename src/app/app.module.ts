import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingComponent } from './components/container/landing/landing.component';
import { AboutComponent } from './components/container/about/about.component';
import { SkillsComponent } from './components/container/skills/skills.component';
import { ProjectsComponent } from './components/container/projects/projects.component';
import { ExperienceComponent } from './components/container/experience/experience.component';

import { getStorage, provideStorage } from '@angular/fire/storage';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth'

import { environment } from 'src/environments/environment';
import { AdminComponent } from './components/admin/admin.component';
import { FormsModule } from '@angular/forms';
import { LandingSettingsComponent } from './components/admin/landing-settings/landing-settings.component';
import { AboutSettingsComponent } from './components/admin/about-settings/about-settings.component';
import { ExperianceSettingsComponent } from './components/admin/experiance-settings/experiance-settings.component';
import { ProjectsSettingsComponent } from './components/admin/projects-settings/projects-settings.component';
import { SkillsSettingsComponent } from './components/admin/skills-settings/skills-settings.component';
import { AddNewExperianceComponent } from './components/admin/experiance-settings/add-new-experiance/add-new-experiance.component';
import { AllExperianceComponent } from './components/admin/experiance-settings/all-experiance/all-experiance.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { LoadingSpinnerComponent } from './components/admin/loading-spinner/loading-spinner.component';
import { AddNewProjectComponent } from './components/admin/projects-settings/add-new-project/add-new-project.component';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/container/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    LandingComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    AdminComponent,
    LandingSettingsComponent,
    AboutSettingsComponent,
    ExperianceSettingsComponent,
    ProjectsSettingsComponent,
    SkillsSettingsComponent,
    AddNewExperianceComponent,
    AllExperianceComponent,
    DashboardComponent,
    LoadingSpinnerComponent,
    AddNewProjectComponent,
    LoginComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    provideStorage(() => getStorage()),
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
