import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AjoutAbscenceComponent } from './ajout-abscence/ajout-abscence.component';
import { ModifAbscenceComponent } from './modif-abscence/modif-abscence.component';
import { DetailAbscenceComponent } from './detail-abscence/detail-abscence.component';
import { ModifJustifComponent } from './modif-justif/modif-justif.component';
import { DetailJustifComponent } from './detail-justif/detail-justif.component';
import { AjoutJustifComponent } from './ajout-justif/ajout-justif.component';
import { LoginComponent } from './pages/login/login.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
const routes: Routes = [
  {path: "add-ab", component: AjoutAbscenceComponent},
  {path:"modif-ab", component: ModifAbscenceComponent},
  {path:"detail-ab", component: DetailAbscenceComponent},
  {path:"add-justif", component: AjoutJustifComponent},
  {path:"modif-justif", component: ModifJustifComponent},
  {path:"detail-justif", component: DetailJustifComponent},
  {path:"login", component: LoginComponent},
  
{
 
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
      }
    ]
  }, {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
      }
    ]
  }, 
  {
   path: '**',
    redirectTo: 'dashboard'
  },
  {path:"user-profile", component: UserProfileComponent},
  
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
