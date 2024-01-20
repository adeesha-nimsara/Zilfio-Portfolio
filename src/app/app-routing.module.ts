import { NgModule } from '@angular/core';
import { RouterModule, Routes, mapToCanActivate } from '@angular/router';
import { AdminComponent } from './components//admin/admin.component';
import { LandingComponent } from './components/container/landing/landing.component';
import { LandingSettingsComponent } from './components/admin/landing-settings/landing-settings.component';
import { AboutSettingsComponent } from './components/admin/about-settings/about-settings.component';
import { SkillsSettingsComponent } from './components/admin/skills-settings/skills-settings.component';
import { ExperianceSettingsComponent } from './components/admin/experiance-settings/experiance-settings.component';
import { ProjectsSettingsComponent } from './components/admin/projects-settings/projects-settings.component';
import { AddNewExperianceComponent } from './components/admin/experiance-settings/add-new-experiance/add-new-experiance.component';
import { AllExperianceComponent } from './components/admin/experiance-settings/all-experiance/all-experiance.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [{
  path: 'admin',
  component: AdminComponent,
  canActivate: [authGuard],
  children: [{
    path: 'dashboard',
    component: DashboardComponent
  }, {
    path: 'landing',
    component: LandingSettingsComponent,
  }, {
    path: 'about',
    component: AboutSettingsComponent,
  }, {
    path: 'skills',
    component: SkillsSettingsComponent,
  }, {
    path: 'experiance',
    component: ExperianceSettingsComponent,
    children: [{
      path: 'add-new-experiance',
      component: AddNewExperianceComponent
    }, {
      path: 'all-experiance',
      component: AllExperianceComponent
    }]
  }, {
    path: 'projects',
    component: ProjectsSettingsComponent
  }
  ],
},
{
  path: 'login',
  component: LoginComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
