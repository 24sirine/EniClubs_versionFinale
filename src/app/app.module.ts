import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { EmploiTempsComponent } from './emploiTemps/emploiTemps.component';
import { EmploiExaComponent } from './emploiExa/emploiExa.component';

import { AjoutProfComponent } from './ajout-prof/ajout-prof.component';
import { AbscenceEnsComponent } from './abscence-ens/abscence-ens.component';
import { AjoutAbscenceComponent } from './ajout-abscence/ajout-abscence.component';
import { ModifAbscenceComponent } from './modif-abscence/modif-abscence.component';
import { DetailAbscenceComponent } from './detail-abscence/detail-abscence.component';

import { AjoutJustifComponent } from './ajout-justif/ajout-justif.component';
import { ModifJustifComponent } from './modif-justif/modif-justif.component';
import { DetailJustifComponent } from './detail-justif/detail-justif.component';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    EmploiTempsComponent,
    EmploiExaComponent,
    
  
    AjoutProfComponent,
    AbscenceEnsComponent,
    AjoutAbscenceComponent,
    ModifAbscenceComponent,
    DetailAbscenceComponent,
    
    AjoutJustifComponent,
    ModifJustifComponent,
    DetailJustifComponent,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
