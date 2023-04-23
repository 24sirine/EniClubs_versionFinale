import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';


import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { EmploiTempsComponent } from 'src/app/emploiTemps/emploiTemps.component';
import { EmploiExaComponent } from 'src/app/emploiExa/emploiExa.component';


import { AjoutProfComponent } from 'src/app/ajout-prof/ajout-prof.component';
import { AbscenceEnsComponent } from 'src/app/abscence-ens/abscence-ens.component';
import { RegisterComponent } from '../../pages/register/register.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },

    { path: 'abscence-ens',           component: AbscenceEnsComponent },
   
  

    { path: 'emploiTemps',           component: EmploiTempsComponent },
    { path: 'emploiExa',           component: EmploiExaComponent },
  

    { path: 'ajout-prof',           component: AjoutProfComponent },
    { path: 'register',       component: RegisterComponent }
  


];
